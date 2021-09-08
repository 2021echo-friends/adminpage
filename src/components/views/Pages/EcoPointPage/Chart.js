import React, {useEffect, useState} from "react";

const Chart = () => {
    const [isChartData, setIsChartData] = useState(false);
    const [chartData, setChartData] = useState();

    useEffect(() => {
        fetch("http://54.180.146.9:3001/auth-non/statistics", {
            method: "GET",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setChartData(response.data);
            setIsChartData(true);
        })
    }, [])

    const reviewPart = (obj) => {
        const res = [];
        var highData = 0;
        obj.forEach((prop) => {
            if(prop[1] > highData) highData = prop[1];
        })
        var maxData = Math.round((highData / 9) * 10);
        let percentData = obj.map((prop) => {
            return Math.floor((0.97 - (prop[1] / maxData)) * 1000) / 10;
        })
        for(var i = 0; i < obj.length; i++){
            res.push(
        <div className={"reviewPart rev" + i}>
            <div className="line">
                <div className="chart" style={{top : percentData[i] + "%"}}>
                    <div className="point"></div>
                    <div className="lineBar"></div>
                </div>
            </div>
            <div className="infoBox">{obj[i][1]}</div>
        </div>);
        }
        return res;
    }

    return (
        <div className="content ecoContent">
            <div className="reviewShowBox">
                {
                    isChartData ?
                    reviewPart(Object.entries(chartData))
                    :
                    ""
                }
            </div>
            <div className="reviewNumBox">
                {
                    isChartData ? 
                    Object.keys(chartData).map((prop) => {
                    return(
                        <div>{prop}</div>
                    )})
                    :
                    ""
                }
            </div>
        </div>
    )
}

var reviewPart = document.getElementsByClassName("reviewPart");
var infoBox = document.getElementsByClassName("infoBox");
var infoBoxNum = 0;
setTimeout(() => {
    for(var i = 0; i < reviewPart.length; i++){
        reviewPart[i].addEventListener('mouseover', (prop) => {
            if(prop.target.className.slice(0, 4) != "revi") return;
            infoBoxNum = prop.target.className.slice(14);
            infoBox[infoBoxNum].style.display = "flex";
        });
        reviewPart[i].addEventListener('mouseout', (prop) => {
            if(prop.target.className.slice(0, 4) != "revi") return;
            infoBox[infoBoxNum].style.display = "none";
        });
    }
}, 500)

export default Chart;