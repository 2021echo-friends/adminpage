import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import EditButton from '../../Button/EditButton';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';

function CustomerEditPage(props) {
    const {no, id, username, email, password, ecopoint} = props.location.state || {};
    const [Nickname, setNickname] = useState(username);
    const [Email, setEmail] = useState(email);
    const [Password, setPassword] = useState(password);
    const [EcoPoint, setEcoPoint] = useState(ecopoint);
    const token = localStorage.getItem('token');
    const history = useHistory();

    const onNicknameHandler = (e) => {
        setNickname(e.target.value);
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

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`http://54.180.146.9:3001/admin/user?user_id=${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          return response.json()
        })
        .then(response => {
          history.goBack();
        })
        .catch((err) => console.log(err));
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
                                <td className="td-title">닉네임</td>
                                <td><input
                                    type="text"
                                    size="70"
                                    className="nickname"
                                    onChange={onNicknameHandler}
                                    value={Nickname}
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
                        <div className="deleteButton">
                        <button onClick={onSubmit}>삭제</button>
                        </div>
                        <CancelButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerEditPage
