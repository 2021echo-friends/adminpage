import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';

function EcoPointPage() {
    return (
        <div className="ecopoint">
            <Navbar />
            <div className="board">
                <Title title="에코 포인트 현황" />
            </div>
        </div>
    )
}

export default EcoPointPage
