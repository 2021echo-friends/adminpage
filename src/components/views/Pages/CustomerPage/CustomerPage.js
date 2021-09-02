import React, {useEffect} from 'react';
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';
import CustomerEditPage from './CustomerEditPage';
import CustomerInfo from './CustomerInfo';
import { customerData } from '../../../../totalData';
import {token} from '../../../../token';
import "./Customer.css";

function CustomerPage(props) {
    const criteria = [ '사용자 번호', '아이디', '이메일', '비밀번호', '에코포인트' ];
    useEffect(() => {   
        fetch("http://54.180.146.9:3001/auth-non/login", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email : "admin@example.com",
                password: "1234"
            })
        })
        /*
        fetch("http://54.180.146.9:3001/admin/product", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json", Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
            })
        })
        */
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response.data);
        })
    }, []);

    return (
        <div className="customer">
            <Navbar selected={1} />
            <div className="board">
                <Title title="고객 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div className="buttons">
                        <EditButton path="customer/edit" />
                        <DeleteButton />
                    </div>
                    <div className="board_body_customer">
                        <div className="board_header">
                            <div className="sub num">No</div>
                            <div className="sub name">이름</div>
                            <div className="sub email">이메일</div>
                            <div className="sub password">패스워드</div>
                            <div className="sub ecoPoint">에코포인트</div>
                        </div>
                        {
                            customerData.map((data) => (
                            <CustomerInfo 
                                key={data.id}
                                no={data.num}
                                username={data.username}
                                email={data.email}
                                password={data.password}
                                ecopoint={data.ecopoint}
                            />
                            ))
                        }
                    </div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerPage
