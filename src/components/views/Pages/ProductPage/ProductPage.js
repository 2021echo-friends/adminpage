import React, { useEffect, useState } from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import Searchbar from '../../Searchbar/Searchbar';
import NewButton from '../../Button/NewButton';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';
import ProductInfo from './ProductInfo';
import '../styles.css';
import "./Product.css";

function ProductPage() {
    const criteria = [ '전체', '상품명' ];
    const token = localStorage.getItem("token");
    const [isDataIn, setIsDataIn] = useState(false);
    const [productData, setProductData] = useState();
    const [Criterion, setCriterion] = useState(0);
    const [Content, setContent] = useState("")

    useEffect(() => {
        fetch("http://54.180.146.9:3001/admin/product", {
            method: "GET",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .then(response => {
            setProductData(response.data);
            setIsDataIn(true);
        })
    }, [])
    
    const getCriterion = (index) => {
        setCriterion(index);
        console.log(Criterion);
      }

    const getContent = (content) => {
        setContent(content);
        console.log(Content);
    }

    return (
        <div className="product">
            <Navbar selected={2} />
            <div className="board">
                <Title title="물품 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} getCriterion={getCriterion} getContent={getContent} />
                    <div className="buttons">
                        <NewButton path='/product/new' />
                    </div>
                    <div className="board_body_product">
                        <div className="board_header">
                            <div className="sub num">No</div>
                            <div className="sub name">상품명</div>
                            <div className="sub price">가격</div>
                            <div className="sub point">적립 포인트</div>
                            <div className="sub ecoPoint">에코 포인트</div>
                        </div>
                        {
                            isDataIn ?
                            productData.map((data, index) => {
                                const {_id, name, price, description, point_value, eco_value_o3} = data;
                                if (Criterion === 0) {
                                    return (
                                        <ProductInfo 
                                            key={index}
                                            id={_id}
                                            num={index + 1}
                                            name={name}
                                            price={price}
                                            description={description}
                                            point={point_value}
                                            ecopoint={eco_value_o3}
                                        />)
                                }
                                if (Criterion === 1) {
                                    if (name.includes(Content)) {
                                        return (
                                            <ProductInfo 
                                                key={index}
                                                id={_id}
                                                num={index + 1}
                                                name={name}
                                                price={price}
                                                description={description}
                                                point={point_value}
                                                ecopoint={eco_value_o3}
                                            />
                                        )
                                    }
                                }
                            }
                            )
                            :
                            ""
                        }
                    </div>
                    {
                    /*
                     Data.map((data) => (
                        <div>
                        <p>{data.name}</p>
                        <p>{data.eco_value}</p>
                        </div>
                    ))
                    */
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPage
