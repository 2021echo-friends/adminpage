import { circleData as data } from "../../../../totalData";

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