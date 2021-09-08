import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';

function EventAddPage(){
    const token = localStorage.getItem("token");
    const [EventTitle, setEventTitle] = useState("");
    const [Body, setBody] = useState("");
    const history = useHistory();

    const onTitleHandler = (e) => {
      setEventTitle(e.target.value);
    }

    const onBodyHandler = (e) => {
        setBody(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      fetch("http://54.180.146.9:3001/admin/post", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              title: EventTitle,
              body: Body
              })
            })
            .then(response => {
                return response.json()
            })
            .then(response => {
                alert('등록이 완료되었습니다.')
                history.goBack();
            })
            .catch((err) => console.log(err));
    }

    return (
      <div className="event">
        <Navbar selected={3} />
        <div className="board">
        <Title title="행사 관리" />
          <div className="content">
            <form onSubmit={onSubmit}>
              <table className="edit-table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="td-title">제목</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="eventTitle"
                      onChange={onTitleHandler}
                      value={EventTitle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">본문</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="eventBody"
                      onChange={onBodyHandler}
                      value={Body}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="edit-buttons">
                <button onClick={onSubmit}>등록</button>
              </div>
            </form>
            <CancelButton />
          </div>
        </div>
      </div>
    );
}

export default EventAddPage;
