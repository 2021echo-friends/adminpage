import React from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';
import CustomerEditPage from './CustomerEditPage';
import CustomerInfo from './CustomerInfo';

function CustomerPage(props) {
    const criteria = [ '사용자 번호', '아이디', '이메일', '비밀번호', '에코포인트' ];
    const customerData = [
        {
            id:1,
            num: 1,
            username: "hond",
            email: "cdt9473@gmail.com",
            password: "1234",
            ecopoint: 120
        },
        {
            id:2,
            num: 2,
            username: "mongmong",
            email: "clashlabel@gmail.com",
            password: "1234",
            ecopoint: 200
        },
        {
            id:3,
            num: 3,
            username: "orokos",
            email: "wjp1230@knu.ac.kr",
            password: "1234",
            ecopoint: 300
        }
    ]
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
                    <div className="board_body">
                        <div className="board_header">
                            <div className="sub num">No</div>
                            <div className="sub subTitle">제목</div>
                            <div className="sub date">작성시간</div>
                            <div className="sub like">공감</div>
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
