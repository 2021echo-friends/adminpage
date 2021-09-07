import React, { useState, useEffect } from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import Written from "./EventWritten";
import "./EventPage.css";

function EventPage() {
    const criteria = [ '전체', '제목' ];
    const [Data, setData] = useState([])
    const [Criterion, setCriterion] = useState(0);
    const [Content, setContent] = useState("")
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("http://54.180.146.9:3001/auth-non/post", {
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
            console.log(response.data);
            setData(response.data);
        })
    }, [])
    
    const getCriterion = (index) => {
        setCriterion(index);
        console.log(Criterion);
      }

    const getContent = (content) => {
        setContent(content);
        console.log(Content);
    }
    
    return (
        <div className="event">
            <Navbar selected={3} />
            <div className="board">
                <Title title="행사 관리" />
                <div className="content">
                <Searchbar criteria={criteria} getCriterion={getCriterion} getContent={getContent} />
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
                            Data.map((data, index) => {
                                if(Criterion === 0) {
                                    return <Written
                                    key={data._id}
                                    id={data._id}
                                    no={index+1}
                                    date={data.date_create.substr(0, 19).replace(/T/gi, ' ')}
                                    title={data.title}
                                    body={data.body}
                                />
                                }
                                if(Criterion === 1) {
                                    if(data.title.includes(Content))
                                    return <Written 
                                    key={data._id}
                                    id={data._id}
                                    no={index+1}
                                    date={data.date_create.substr(0, 19).replace(/T/gi, ' ')}
                                    title={data.title}
                                    body={data.body}
                                />
                                }
                                return false;
                            })
                        }
                    </div>
                    
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
