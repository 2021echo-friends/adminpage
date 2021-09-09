import React, { useState, useEffect } from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import QuizInfo from './QuizInfo';
import './AttendanceQuizPage.css';

function AttendanceQuizPage() {
    const criteria = [ '전체', '퀴즈' ];
    const [Quizes, setQuizes] = useState([]);
    const [Criterion, setCriterion] = useState(0);
    const [Content, setContent] = useState("")
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("http://54.180.146.9:3001/admin/quiz", {
            method: "GET",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setQuizes(response.data);
            console.log(Quizes);
        })
    }, [])
    
    const getCriterion = (index) => {
        setCriterion(index);
      }

    const getContent = (content) => {
        setContent(content);
    }
    

    return (
        <div className="attendence-quiz">
            <Navbar selected={4} />
            <div className="board">
                <Title title="출석 퀴즈 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} getCriterion={getCriterion} getContent={getContent} />
                    <div className="buttons">
                        <NewButton path="/quiz/new" />
                    </div>  
                    <div className="board_body">
                        <div className="board_header">
                            <div className="sub num">No</div>
                            <div className="sub question">퀴즈</div>
                            <div className="sub answer">정답</div>
                        </div>
                        {
                            Quizes.map((data, index) => {
                                if(Criterion === 0) {
                                    return <QuizInfo
                                    key={data._id}
                                    id={data._id}
                                    no={index+1}
                                    question={data.question}
                                    answer={data.answer}
                                />
                                }
                                if(Criterion === 1) {
                                    if(data.question.includes(Content))
                                    return <QuizInfo 
                                    key={data._id}
                                    id={data._id}
                                    no={index+1}
                                    question={data.question}
                                    answer={data.answer}
                                />
                                }
                                return false;
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceQuizPage
