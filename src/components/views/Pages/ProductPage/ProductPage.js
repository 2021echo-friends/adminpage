import React from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';
import ProductInfo from './ProductInfo';

function ProductPage() {
    const criteria = [ '물품 아이디', '가격' ];
    const productData = [
        {
            id:1,
            uid: 1,
            price: 3000,
            name: "home",
            pointScore: 30,
            ecopoint: 120
        },
        {
            id:2,
            uid: 2,
            price: 6000,
            name: "car",
            pointScore: 50,
            ecopoint: 20
        },
        {
            id:3,
            uid: 3,
            price: 10000,
            name: "beer",
            pointScore: 100,
            ecopoint: 170
        },
    ]

    return (
        <div className="product">
            <Navbar selected={2} />
            <div className="board">
                <Title title="물품 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div className="buttons">
                        <NewButton path='/product/new' />
                    </div>
                    <div className="board_body">
                        <div className="board_header">
                            <div className="sub num">No</div>
                            <div className="sub subTitle">제목</div>
                            <div className="sub date">작성시간</div>
                            <div className="sub like">공감</div>
                        </div>
                        {
                            productData.map((data) => (
                                <ProductInfo 
                                    key={data.id}
                                    uid={data.uid}
                                    price={data.price}
                                    name={data.name}
                                    pointScore={data.pointScore}
                                    ecopoint={data.ecopoint}
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

export default ProductPage
