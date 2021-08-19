import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';

function EventPage() {
    return (
        <div className="event">
            <Navbar />
            <div className="board">
                <Title title="행사 관리" />
            </div>
        </div>
    )
}

export default EventPage
