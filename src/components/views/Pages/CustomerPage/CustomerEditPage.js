import React, { useState, useEffect } from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import EditButton from '../../Button/EditButton';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';

function CustomerEditPage(props) {
    const {no, username, email, password, ecopoint} = props.location.state;
    const [Id, setId] = useState(username);
    const [Email, setEmail] = useState(email);
    const [Password, setPassword] = useState(password);
    const [EcoPoint, setEcoPoint] = useState(ecopoint);

    useEffect(() => {
        // axios로 해당 고객 정보 불러오기
    }, [])

    const onIdHandler = (e) => {
        setId(e.target.value);
    }

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const onEcopointHandler = (e) => {
        setEcoPoint(e.target.value);
    }

    return (
        <div className="customer">
            <Navbar selected={1} />
            <div className="board">
                <Title 
                title="고객 관리"
                subtitle="고객 정보 수정" />
                <div className="content">
                    <table className="edit-table">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-title">아이디</td>
                                <td><input
                                    type="text"
                                    size="70"
                                    className="id"
                                    onChange={onIdHandler}
                                    value={Id}
                                    /></td>
                            </tr>
                            <tr>
                                <td className="td-title">이메일</td>
                                <td><input
                                    type="text"
                                    size="70"
                                    className="email"
                                    onChange={onEmailHandler}
                                    value={Email}
                                    /></td>
                            </tr>
                            <tr>
                                <td className="td-title">비밀번호</td>
                                <td><input
                                    type="text"
                                    size="70"
                                    className="password"
                                    onChange={onPasswordHandler}
                                    value={Password}
                                    /></td>
                            </tr>
                            <tr>
                                <td className="td-title">에코 포인트</td>
                                <td><input
                                    type="text"
                                    size="70"
                                    className="ecopoint"
                                    onChange={onEcopointHandler}
                                    value={EcoPoint}
                                    /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="edit-buttons">  
                    <EditButton />
                    <CancelButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerEditPage