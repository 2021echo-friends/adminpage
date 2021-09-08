import React, {useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Navbar/Title';
import './styles.css';
import './MainPage.css';
import Chart from './EcoPointPage/Chart';
import {makeGraph} from '../Pages/EcoPointPage/circleCanvas';
import {circleData} from "../../../totalData";
import "./MainPageSlider";

function MainPage(props) {

    useEffect(() => {
        makeGraph("circleCanvas", 0, 195, 195);
        makeGraph("circleCanvas", 1, 795, 195);
    }, []);

    return (
        <div className="main">
            <Navbar />
            <div className="board">
                <Title title="대시보드" />
                <div className="content">
                    <div className="container big">
                        <div className="ecoPointBox">
                            <div className="left">
                                {circleData[0].title.map((prop, index) => {
                                    return(
                                        <div className="line">
                                            <div className="square" style={
                                                {backgroundColor: circleData[0].colorWay[index]}
                                            }></div>
                                            <span>{prop}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <canvas id="circleCanvas" width="1000px" height="400px"></canvas>
                            <div className="right">
                                {circleData[1].title.map((prop, index) => {
                                    return(
                                        <div className="line">
                                            <div className="square" style={
                                                {backgroundColor: circleData[1].colorWay[index]}
                                            }></div>
                                            <span>{prop}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="container slideContainer">
                        <div className="banner">
                            <div className="img_container">
                                <div className="bannerBox">
                                    <img className="bannerImg" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/cat1.jpg?raw=true" />
                                </div>
                                <div className="bannerBox">
                                    <img className="bannerImg" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/cat2.jpg?raw=true" />
                                </div>
                                <div className="bannerBox">
                                    <img className="bannerImg" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/cat3.jpg?raw=true" />
                                </div>
                                <div className="bannerBox">
                                    <img className="bannerImg" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/cat4.jpg?raw=true" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
