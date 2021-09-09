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
    const [DataId, setDataId] = useState("")
    const history = useHistory();

    const onTitleHandler = (e) => {
      setEventTitle(e.target.value);
    }

    const onBodyHandler = (e) => {
        setBody(e.target.value);
    }

    const addData = () => {
      fetch("http://54.180.146.9:3001/admin/post", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              title: EventTitle,
              body: Body,
              attachment_folder_id: DataId,
              body_folder_id: DataId,
              })
            })
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              console.log(response);
              history.goBack();
            })
            .catch((err) => {
              console.log(err);
            })
    }

    const uploadFile = () => {
      const file = document.getElementById('upload-file');
      const formData = new FormData();
      formData.append('files', file);

      //console.log(file.files[0]);
      fetch("http://54.180.146.9:3001/auth-non/file?counts=1", {
        method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
            })
            .then(response => {
              return response.json()
          })
          .then(response => {
            alert('사진 등록이 완료되었습니다.');
            setDataId(response.data.folder_id);
            console.log(response);
        })
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
                  <tr>
                    <td className="td-title">파일 업로드</td>
                    <td>
                      <input
                      type="file"
                      id="upload-file"
                      />
                      <button onClick={uploadFile}>완료</button>
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
