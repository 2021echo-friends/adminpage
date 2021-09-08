import React, {useEffect, useState} from 'react';
import { circleData as data } from "../../../../totalData";
import "./circle.css";

export const makeGraph = (id, idx, x, y) => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    let dataTotal = 0;
    data[idx].num.forEach((prop) => {
        dataTotal += prop;
    })
    const perData = data[idx].num.map((prop) => {
        return (prop * 2 / dataTotal).toFixed(1);
    })
    var startPos = 0;
    perData.forEach((prop, index) => {
        let endPos = startPos + parseFloat(prop);
        if(index === perData.length - 1) endPos = 2;
        ctx.beginPath();
        ctx.arc(x, y, 190, Math.PI * startPos, Math.PI * endPos);
        startPos = endPos;
        ctx.lineTo(x, y);
        ctx.fillStyle = data[idx].colorWay[index];
        ctx.fill();
    })
    ctx.beginPath();
    ctx.arc(x, y, 140, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
}

export const Circle = () => {
    const [isProductData, setIsProductData] = useState(false);
    const [productData, setProductData] = useState();
    const token = localStorage.getItem("token");

    useEffect(() => {
        makeGraph("circleCanvas", 0, 195, 195);
        makeGraph("circleCanvas", 1, 795, 195);

        fetch("http://54.180.146.9:3001/admin/product", {
            method: "GET",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setProductData(response.data.sort((a, b) => {
                return b.cnt - a.cnt;
            }));
            setIsProductData(true);
        })
    }, []);

    return (
        <div className="ecoPointBox">
            <div className="left">
                <div className="line">2020년 제품 판매량</div>
                {
                    isProductData ? 
                    productData.map((prop, index) => {
                        if(index >= 5) return;
                        return (
                            <div className="line">
                                <div className="square" style={
                                    {backgroundColor: data[0].colorWay[index]}
                                }></div>
                                <span>{prop.name}</span>
                            </div>
                        )
                    })
                    :
                    ""
                }
            </div>
            <canvas id="circleCanvas" width="1000px" height="400px"></canvas>
            <div className="right">
                <div className="line">2021년 제품 판매량</div>
                {
                    isProductData ? 
                    productData.map((prop, index) => {
                        if(index >= 5) return;
                        return (
                            <div className="line">
                                <div className="square" style={
                                    {backgroundColor: data[1].colorWay[index]}
                                }></div>
                                <span>{prop.name}</span>
                            </div>
                        )
                    })
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default Circle;