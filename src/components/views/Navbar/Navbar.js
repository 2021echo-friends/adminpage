import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

import './Navbar.css';

function Navbar(props) {
    const history = useHistory();
    const lists = [
        {id: 1, name: "▶ 고객 관리", path: "/customer"},
        {id: 2, name: "▶ 물품 관리", path: "/product"},
        {id: 3, name: "▶ 행사 관리", path: "/event"},
        {id: 4, name: "▶ 출석 퀴즈 관리", path: "/quiz"},
        {id: 5, name: "▶ 에코 포인트 현황", path: "/ecopoint"},
    ]

    const onLogoHandler = () => {
        history.push("/main");
    }

    const onListHandler = (id) => {
        history.push(lists[id-1].path);
    }

    const onLogoutHandler = () => {
        props.history.push("/");
    }

    const listItem = lists.map((list, key) => {
    if(props.selected === list.id) {
        return (
        <tr key={key}>
            <td className="selected">
                <div className="list-one" onClick={() => onListHandler(list.id)}>{list.name}</div>
            </td>
        </tr> )
    }    
    else {
        return (
        <tr key={key}>
            <td>
                <div className="list-one" onClick={() => onListHandler(list.id)}>{list.name}</div>
            </td>
        </tr> )
    }});

    return (
        <table className="navbar">
            <thead>
                <tr>
                    <td className="logo">
                        <img alt="logo" src="https://image.flaticon.com/icons/png/512/1598/1598431.png" onClick={onLogoHandler} />
                     </td>
                </tr>
            </thead>
            <tbody>
                {listItem}
                <tr>
                    <td className="logout">
                        <div className="logout-button" onClick={onLogoutHandler}>로그아웃</div>
                    </td>
                </tr>
            </tbody>    
        </table>
    )
}

export default withRouter(Navbar)