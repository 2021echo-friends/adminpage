export const data = [{
    title : ["a", "bbbbb    ", "c", "d"],
    num : [100, 300, 400, 500],
    colorWay : ["#037F8C", "#F2B90C", "#F27507", "#F2490C", "#590202"]
},{
    title : ["e", "f", "g", "h", "p"],
    num : [600, 700, 1000, 1500, 2000],
    colorWay : ["#A9BF04", "#7C8C03", "#4F5902", "#222601", "#D9BD9C"]
},];

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