import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import CancelButton from '../../Button/CancelButton';
import AddButton from 'components/views/Button/AddButton';
import '../styles.css';

function AttendanceQuizAddPage(){
    const token = localStorage.getItem("token");
    const [Question, setQuestion] = useState("");
    const [Answer, setAnswer] = useState(0);
    const history = useHistory();

    const onQuestionHandler = (e) => {
      setQuestion(e.target.value);
    }

    const onAnswerHandler = (e) => {
      setAnswer(e.target.value);
    }

    const addData = (e) => {
      fetch("http://54.180.146.9:3001/admin/quiz", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              question: Question,
              answer: Answer
              })
            })
            .then(response => {
                return response.json()
            })
            .then(response => {
                alert('등록이 완료되었습니다.')
                console.log(response);
                history.goBack();
            })
            .catch((err) => console.log(err));
    }

    return (
      <div className="event">
        <Navbar selected={3} />
        <div className="board">
        <Title title="출석 퀴즈 관리" subtitle="출석 퀴즈 신규 등록" />
          <div className="content">
              <table className="edit-table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="td-title">퀴즈</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="question"
                      onChange={onQuestionHandler}
                      value={Question}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">정답</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="answer"
                      onChange={onAnswerHandler}
                      value={Answer}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="edit-buttons">
                <AddButton addData={addData} />
                <CancelButton />
              </div>
          </div>
        </div>
      </div>
    );
}

export default AttendanceQuizAddPage;
