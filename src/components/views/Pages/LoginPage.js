import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import './styles.css';
import Token from '../../../token';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(1),
        width: '30ch',
    },
}))

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
    },
  })(TextField);

function LoginPage(props) {
    const classes = useStyles();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const token = Token.token;

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault(); // 새로고침 x 
        
        fetch("http://54.180.146.9:3001/auth-non/login", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email : Email,
                password: Password,
            })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.success === false) {
                alert('이메일 혹은 비밀번호가 잘못 되었습니다.');
            } else {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                props.history.push('/main');
            } 
        })
    }

    return (
        <div className="login-background">
            <div className="login">
            <img alt="logo" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/ecostep2.png?raw=true"/>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
                관리자페이지
                <h1>로그인</h1>
                <CssTextField
                label="이메일"
                className="textfield-email"
                name="이메일"
                onChange={onEmailHandler}
                type="text"
                fullWidth
                margin="normal" />
                <CssTextField
                label="비밀번호"
                className="textfield-password"
                name="비밀번호"
                onChange={onPasswordHandler}
                type="password"
                fullWidth
                margin="normal" />
                <button className="login-button">
                    로그인
                </button>
            </form>
            </div>
        </div>
        
    )
}

export default LoginPage
