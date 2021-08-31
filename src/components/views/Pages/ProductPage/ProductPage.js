import React, { useEffect, useState } from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';
import Token from '../../../../token';

function ProductPage() {
    const criteria = [ '물품 아이디', '가격' ];
    const token = Token.token;
    const [Data, setData] = useState([])
    

    useEffect(() => {   
        fetch("http://54.180.146.9:3001/admin/product", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
    }, [])

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
                    {
                        /*
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
                    */
                    }
                    { Data.map((data) => (
                        <div>
                        <p>{data.name}</p>
                        <p>{data.eco_value}</p>
                        </div>
                    ))}
                    <div>이전 다음</div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
