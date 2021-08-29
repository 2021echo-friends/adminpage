import React, {useEffect} from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import './EcoPointPage.css';
import {data as circleData, makeGraph} from './circleCanvas';

function EcoPointPage() {
    let data = [10, 8, 20, 400, 512];
    var highData = 0;
    data.forEach((prop) => {
        if(prop > highData){
            highData = prop;
        }
    })
    var maxData = Math.round((highData / 9) * 10);
    let percentData = data.map((prop) => {
        return Math.floor((0.97 - (prop / maxData)) * 1000) / 10;
    })

    useEffect(() => {
        makeGraph("circleCanvas", 0, 195, 195);
        makeGraph("circleCanvas", 1, 795, 195);
        var chart = document.getElementsByClassName("chart");
        for(var i = 0; i < chart.length; i++){
            chart[i].style.top = percentData[i] + "%";
        }
    }, []);

    return (
        <div className="ecopoint">
            <Navbar selected={5} />
            <div className="board">
                <Title title="에코 포인트 현황" />
                <div className="content ecoContent">
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
                <Title title="환경 점수" />
                <div className="content ecoContent">
                    <div className="reviewShowBox">
                        <div className="reviewPart">
                            <div className="line">
                                <div className="chart">
                                    <div className="point"></div>
                                    <div className="lineBar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="reviewPart">
                            <div className="line">
                                <div className="chart">
                                    <div className="point"></div>
                                    <div className="lineBar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="reviewPart">
                            <div className="line">
                                <div className="chart">
                                    <div className="point"></div>
                                    <div className="lineBar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="reviewPart">
                            <div className="line">
                                <div className="chart">
                                    <div className="point"></div>
                                    <div className="lineBar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="reviewPart">
                            <div className="line">
                                <div className="chart">
                                    <div className="point"></div>
                                    <div className="lineBar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviewNumBox">
                        <div>메탄</div>
                        <div>유탄</div>
                        <div>탄탄</div>
                        <div>지탄</div>
                        <div>방탄</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcoPointPage
