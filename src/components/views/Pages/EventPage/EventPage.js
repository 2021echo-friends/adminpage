import React from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import Written from "./EventWritten";
import { eventWritten as written } from '../../../../totalData';
import "./EventPage.css";

function EventPage() {
    const criteria = [ '전체', '행사 아이디' ];
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
                            written.map((data) => (
                            <Written 
                                key={data.id}
                                no={data.num}
                                date={data.date}
                                title={data.title}
                                body={data.body}
                            />
                            ))
                        }
                    </div>
                    
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
