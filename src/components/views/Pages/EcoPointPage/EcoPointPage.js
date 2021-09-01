import React, {useEffect} from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import './EcoPointPage.css';
import {makeGraph} from './circleCanvas';
import {circleData} from "../../../../totalData";
import Chart from './Chart';

function EcoPointPage() {

    useEffect(() => {
        makeGraph("circleCanvas", 0, 195, 195);
        makeGraph("circleCanvas", 1, 795, 195);
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
                <Chart />
            </div>
        </div>
    )
}

export default EcoPointPage
