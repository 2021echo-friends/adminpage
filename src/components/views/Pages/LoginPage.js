import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function LoginPage(props) {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault(); // 새로고침 x

        let variables = {
            id: Id,
            password: Password,
        }

        props.history.push("/main");
        //axios
    }

    return (
        <div className="login-background">
            <div className="login">
            <img alt="logo" src="https://image.flaticon.com/icons/png/512/1598/1598431.png"/>
            <form onSubmit={onSubmitHandler}>
                <h1>로그인</h1>
                <input placeholder={'아이디를 입력하세요.'} value={Id} onChange={onIdHandler} />
                <br />
                <input type="password" placeholder={'비밀번호를 입력하세요.'} value={Password} onChange={onPasswordHandler} />

                <br/>
                <button className="login-button">
                    로그인
                </button>
            </form>
            </div>
        </div>
        
    )
}

export default LoginPage
