import React from 'react';

import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';

function EcoPointPage() {
    return (
        <div className="ecopoint">
            <Navbar selected={5} />
            <div className="board">
                <Title title="에코 포인트 현황" />
                <div className="content">

                </div>
            </div>
        </div>
    )
}

export default EcoPointPage
