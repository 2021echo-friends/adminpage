import React from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import Written from "./EventWritten";
import "./EventPage.css";

function EventPage() {
    const criteria = [ '행사 아이디' ];
    const written = [
        {
            id:1,
            num: 1,
            date: "2021-12-06",
            title:"반갑습니다",
            body: "반가운 이유에 대해 말하겠습니다. 제가 반가운 이유. 소신발언 하겠습니다.반가운 이유에 대해 말하겠습니다. 제가 반가운 이유. 소신발언 하겠습니다.반가운 이유에 대해 말하겠습니다. 제가 반가운 이유. 소신발언 하겠습니다."
        },
        {
            id:2,
            num: 2,
            date: "2021-12-06",
            title:"반갑습니다",
            body: "반가운 이유에 대해 말하겠습니다."
        },
        {
            id:3,
            num: 3,
            date: "2021-12-06",
            title:"반갑습니다",
            body: "반가운 이유에 대해 말하겠습니다."
        }
    ]
    return (
        <div className="event">
            <Navbar selected={3} />
            <div className="board">
                <Title title="행사 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div className="buttons">
                        <NewButton />
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
                                like={data.like}
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
