import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import Written from "./EventWritten";
import '../styles.css';
import "./EventPage.css";

function EventPage() {
    const criteria = [ '전체', '제목' ];
    const [Data, setData] = useState([])
    const [Criterion, setCriterion] = useState(0);
    const [Content, setContent] = useState("")
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("http://54.180.146.9:3001/auth-non/post?per_page=100", {
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
            setData(response.data);
        })
    }, [])
    
    const getCriterion = (index) => {
        setCriterion(index);
      }

    const getContent = (content) => {
        setContent(content);
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
                                    image={data.body_folder_id}
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
                                    image={data.body_folder_id}
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

export default EventPage;
