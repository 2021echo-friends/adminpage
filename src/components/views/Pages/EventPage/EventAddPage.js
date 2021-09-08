import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import CancelButton from '../../Button/CancelButton';
import AddButton from 'components/views/Button/AddButton';
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

    const addData = async (e) => {
      const res = await fetch("http://54.180.146.9:3001/admin/post", {
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

            return res;
    }

    return (
      <div className="event">
        <Navbar selected={3} />
        <div className="board">
        <Title title="행사 관리" />
          <div className="content">
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
                <AddButton addData={addData} />
                <CancelButton />
              </div>
          </div>
        </div>
      </div>
    );
}

export default EventAddPage;
