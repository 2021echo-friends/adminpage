import React from 'react';

import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';
import Searchbar from '../Searchbar/Searchbar';
import NewButton from '../Button/NewButton';
import EditButton from '../Button/EditButton';
import DeleteButton from '../Button/DeleteButton';

function EventPage() {
    const criteria = [ '행사 아이디' ];

    return (
        <div className="event">
            <Navbar selected={3} />
            <div className="board">
                <Title title="행사 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div className="buttons">
                        <NewButton />
                        <EditButton />
                        <DeleteButton />
                    </div>
                    <div>표</div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
