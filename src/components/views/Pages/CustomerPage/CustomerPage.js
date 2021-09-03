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
    const [Users, setUsers] = useState([])
    const criteria = [ '전체', '사용자 번호', '아이디', '이메일', '비밀번호', '에코포인트' ];
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
    }, []);

    return (
        <div className="customer">
            <Navbar selected={1} />
            <div className="board">
                <Title title="고객 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
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
                                return <CustomerInfo
                                    key={data.user_id._id}
                                    no={index}
                                    username={data.user_id.nickname}
                                    email={data.user_id.email}
                                    password={data.user_id.password}
                                    ecopoint={data.account-data.used_account} />
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
