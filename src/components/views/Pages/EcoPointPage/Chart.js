import {chartData} from "../../../../totalData";
import React, {useEffect} from "react";

const Chart = () => {
    var highData = 0;
    chartData.data.forEach((prop) => {
        if(prop > highData){
            highData = prop;
        }
    })
    var maxData = Math.round((highData / 9) * 10);
    let percentData = chartData.data.map((prop) => {
        return Math.floor((0.97 - (prop / maxData)) * 1000) / 10;
    })

    useEffect(() => {
        var chart = document.getElementsByClassName("chart");
        console.log(chart.length);
        for(var i = 0; i < chart.length; i++){
            chart[i].style.top = percentData[i] + "%";
        }
    }, []);
    return (
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
                        {
                            chartData.name.map((prop) => (
                                <div>{prop}</div>
                            ))
                        }
                    </div>
                </div>
    )

}

export default Chart;