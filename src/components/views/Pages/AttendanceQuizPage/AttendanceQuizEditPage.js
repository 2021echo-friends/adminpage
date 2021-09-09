import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';
import DeleteButton from 'components/views/Button/DeleteButton';

function AttendanceQuizEditPage(props) {
    const {id, no, question, answer} = props.location.state || {};
    const [Question, setQuestion] = useState(question);
    const [Answer, setAnswer] = useState(answer);
    const token = localStorage.getItem('token');
    const history = useHistory();

    const onQuestionHandler = (e) => {
        setQuestion(e.target.value);
    }

    const onAnswerHandler = (e) => {
        setAnswer(e.target.value);
    }

    const deleteData = (e) => {
        fetch(`http://54.180.146.9:3001/admin/quiz?quiz_id=${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          return response.json()
        })
        .then(response => {
            alert('삭제가 완료되었습니다.');
            history.goBack();
        })
        .catch((err) => console.log(err));
      }

    return (
        <div className="customer">
            <Navbar selected={1} />
            <div className="board">
                <Title 
                title="출석 퀴즈 관리"
                subtitle="출석 퀴즈 상세 정보" />
                <div className="content">
                    <table className="edit-table">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-title">퀴즈</td>
                                <td><input
                                    type="text"
                                    size="70"
                                    className="question"
                                    onChange={onQuestionHandler}
                                    value={Question}
                                    /></td>
                            </tr>
                            <tr>
                                <td className="td-title">정답</td>
                                <td><input
                                    type="text"
                                    size="70"
                                    className="answer"
                                    onChange={onAnswerHandler}
                                    value={Answer}
                                    /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="edit-buttons">
                        <DeleteButton deleteData={deleteData} />
                        <CancelButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceQuizEditPage
