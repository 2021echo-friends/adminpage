import React from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    const lists = [
        {id: 1, name: "▶ 고객 관리", path: "/customer"},
        {id: 2, name: "▶ 물품 관리", path: "/product"},
        {id: 3, name: "▶ 행사 관리", path: "/event"},
        {id: 4, name: "▶ 출석 퀴즈 관리", path: "/quiz"},
        {id: 5, name: "▶ 에코 포인트 현황", path: "/ecopoint"},
    ]

    const onLogoHandler = () => {
        props.history.push("/main");
    }

    const onListHandler = (path) => {
        props.history.push(path);
    }

    const onLogoutHandler = () => {
        props.history.push("/");
    }

    const listItem = lists.map((list, key) => <tr key={key}><td onClick={() => onListHandler(list.path)}>{list.name}</td></tr>);

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
                    <td className="logout" onClick={onLogoutHandler}>로그아웃</td>
                </tr>
            </tbody>    
        </table>
    )
}

export default withRouter(Navbar)