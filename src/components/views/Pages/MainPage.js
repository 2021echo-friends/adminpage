import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';
import './MainPage.css';
import Chart from './EcoPointPage/Chart';

function MainPage(props) {
    return (
        <div className="main">
            <Navbar />
            <div className="board">
                <Title title="대시보드" />
                <div className="content">
                    <div className="container"></div>
                    <div className="container"></div>
                    <div className="container"></div>
                    <div className="container">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
