import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';

function ProductPage() {
    return (
        <div className="product">
            <Navbar />
            <div className="board">
                <Title title="물품 관리" />
            </div>
        </div>
    )
}

export default ProductPage
