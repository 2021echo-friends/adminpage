import React from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';

function ProductPage() {
    const criteria = [ '물품 아이디', '가격' ];

    return (
        <div className="product">
            <Navbar selected={2} />
            <div className="board">
                <Title title="물품 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div className="buttons">
                        <NewButton path='/product/new' />
                        <EditButton path='/product/edit' />
                        <DeleteButton />
                    </div>
                    <div>표</div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
