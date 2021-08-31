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
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const token = Token.token;

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault(); // 새로고침 x 

        fetch("http:///54.180.146.9:3001/non-auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: "my2@example.com",
                password: "1234",
            })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
            props.history.push('/main');
        })
    }

    return (
        <div className="login-background">
            <div className="login">
            <img alt="logo" src="https://image.flaticon.com/icons/png/512/1598/1598431.png"/>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
                관리자페이지
                <h1>로그인</h1>
                <CssTextField
                label="아이디"
                className="textfield-id"
                name="아이디"
                onChange={onIdHandler}
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
