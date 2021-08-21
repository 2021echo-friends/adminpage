import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';

function MainPage(props) {
    return (
        <div className="main">
            <Navbar />
            <div className="board">
                <Title title="대시보드" />
                <div className="content">
                    
                </div>
            </div>
        </div>
    )
}

export default MainPage
