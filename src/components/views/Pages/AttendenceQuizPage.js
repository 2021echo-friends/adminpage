import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';

function AttendenceQuizPage() {
    return (
        <div className="attendence-quiz">
            <Navbar />
            <div className="board">
                <Title title="출석 퀴즈 관리" />
            </div>
        </div>
    )
}

export default AttendenceQuizPage
