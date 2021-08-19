import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';

function CustomerPage() {
    return (
        <div className="customer">
            <Navbar />
            <div className="board">
                <Title title="고객 관리" />
            </div>
        </div>
    )
}

export default CustomerPage
