import React, {useEffect, useState} from 'react';
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import Searchbar from '../../Searchbar/Searchbar';
import CustomerInfo from './CustomerInfo';
import '../styles.css';
import "./Customer.css";

function CustomerPage(props) {
    const [isUser, setIsUser] = useState(false);
    const [users, setUsers] = useState([]);
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
            setUsers(response.data.points);
            setIsUser(true);
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
                            isUser ?
                            users.map((data, index) => {
                                if(data.user_id === null) return;
                                const {user_id : {user_type, _id, nickname, email, password}} = data;
                                if(user_type === "admin") return false;
                                if(Criterion === 0) {
                                    return (
                                    <CustomerInfo
                                        key={_id}
                                        id={_id}
                                        no={index}
                                        username={nickname}
                                        email={email}
                                        password={password}
                                        ecopoint={data.account-data.used_account}
                                    />
                                    )
                                }
                                if(Criterion === 1) {
                                    if(data.user_id.nickname.includes(Content)) {
                                        return (
                                        <CustomerInfo
                                            key={_id}
                                            id={_id}
                                            no={index}
                                            username={nickname}
                                            email={email}
                                            password={password}
                                            ecopoint={data.account-data.used_account}
                                        />
                                        )
                                    }
                                }
                                if(Criterion === 2) {
                                    if(data.user_id.email.includes(Content)) {
                                        return (
                                        <CustomerInfo
                                            key={_id}
                                            id={_id}
                                            no={index}
                                            username={nickname}
                                            email={email}
                                            password={password}
                                            ecopoint={data.account-data.used_account}
                                        />
                                        )
                                    }
                                }
                                return false;
                            })
                            :
                            ""
                        }
                    </div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerPage
