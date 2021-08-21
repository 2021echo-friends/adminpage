import React from 'react';

import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';
import Searchbar from '../Searchbar/Searchbar';

function AttendenceQuizPage() {
    const criteria = [ '퀴즈 아이디' ];

    return (
        <div className="attendence-quiz">
            <Navbar />
            <div className="board">
                <Title title="출석 퀴즈 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div>표</div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default AttendenceQuizPage
