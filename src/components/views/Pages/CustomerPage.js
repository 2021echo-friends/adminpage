import React from 'react';

import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';
import Searchbar from '../Searchbar/Searchbar';

function CustomerPage() {
    const criteria = [ '사용자 번호', '아이디', '이메일', '비밀번호', '에코포인트' ];

    return (
        <div className="customer">
            <Navbar selected={1} />
            <div className="board">
                <Title title="고객 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div>표</div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerPage
