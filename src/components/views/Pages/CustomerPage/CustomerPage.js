import React, {useEffect, useState} from 'react';
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import Searchbar from '../../Searchbar/Searchbar';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';
import CustomerInfo from './CustomerInfo';
import '../styles.css';
import "./Customer.css";

function CustomerPage(props) {
    const [Users, setUsers] = useState([]);
    const [Criterion, setCriterion] = useState(0);
    const [Content, setContent] = useState("")
    const criteria = [ '전체', '닉네임', '이메일' ];
    const token = localStorage.getItem("token");

    useEffect(() => {   
        fetch("http://54.180.146.9:3001/admin/user", {
            method: "GET",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response.data.points);
            setUsers(response.data.points);
        })
    }, [Criterion]);

    const getCriterion = (index) => {
        setCriterion(index);
        console.log(Criterion);
      }

    const getContent = (content) => {
        setContent(content);
        console.log(Content);
    }

    return (
        <div className="customer">
            <Navbar selected={1} />
            <div className="board">
                <Title title="고객 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} getCriterion={getCriterion} getContent={getContent} />
                    <div className="board_body_customer">
                        <div className="board_header">
                            <div className="sub num">No</div>
                            <div className="sub name">닉네임</div>
                            <div className="sub email">이메일</div>
                            <div className="sub password">패스워드</div>
                            <div className="sub ecoPoint">에코포인트</div>
                        </div>
                        {
                            Users.map((data, index) => {
                                if(data.user_id.user_type === "admin") {
                                    return false;
                                }
                                if(Criterion === 0) {
                                    return <CustomerInfo
                                    key={data.user_id._id}
                                    no={index}
                                    username={data.user_id.nickname}
                                    email={data.user_id.email}
                                    password={data.user_id.password}
                                    ecopoint={data.account-data.used_account} />
                                }
                                if(Criterion === 1) {
                                    if(data.user_id.nickname === Content) {
                                        return <CustomerInfo
                                    key={data.user_id._id}
                                    no={index}
                                    username={data.user_id.nickname}
                                    email={data.user_id.email}
                                    password={data.user_id.password}
                                    ecopoint={data.account-data.used_account} />
                                    }
                                }
                                if(Criterion === 2) {
                                    if(data.user_id.email === Content) {
                                        return <CustomerInfo
                                    key={data.user_id._id}
                                    no={index}
                                    username={data.user_id.nickname}
                                    email={data.user_id.email}
                                    password={data.user_id.password}
                                    ecopoint={data.account-data.used_account} />
                                    }
                                }
                                return false;
                            })
                        }
                    </div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerPage
