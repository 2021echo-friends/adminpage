import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import Written from "./EventWritten";
import '../styles.css';
import "./EventPage.css";

function EventPage() {
    const criteria = [ '전체', '행사 아이디' ];
    const token = localStorage.getItem("token");
    const [isDataIn, setIsDataIn] = useState(false);
    const [postData, setPostData] = useState();
    useEffect(() => {
        /*
        fetch("http://54.180.146.9:3001/admin/post", {
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
            setPostData(response.data);
            setIsDataIn(true);
        })
        */
    }, [])
    return (
        <div className="event">
            <Navbar selected={3} />
            <div className="board">
                <Title title="행사 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div className="buttons">
                        <NewButton path="/event/new" />
                    </div>  
                    <div className="board_body">
                        <div className="board_header">
                            <div className="sub num">No</div>
                            <div className="sub subTitle">제목</div>
                            <div className="sub date">작성시간</div>
                        </div>
                        {
                            isDataIn ?
                            postData.map((data, index) => (
                                <Written 
                                    key={index}
                                    no={index}
                                    date={data.date}
                                    title={data.title}
                                    body={data.body}
                                />
                            ))
                            :
                            ""
                        }
                    </div>
                    
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default EventPage;
