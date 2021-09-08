var banner = document.getElementsByClassName("bannerBox");
var bannerPos = 0;
const bannerAutoSlide = () => {
    if(bannerPos === -100 * (banner.length - 1)){
        bannerPos = 100;
    }
    bannerPos -= 100;
    for(var i = 0; i < banner.length; i++){
        banner[i].style.transform = "translateX(" + bannerPos + "%)";
    }
}
let bannerSlideTime = setInterval(bannerAutoSlide, 3000);
var bannerMinHeight = 987654321;
var bannerImgs = document.getElementsByClassName("bannerImg");
for(var i = 0; i < bannerImgs.length; i++){
    if(bannerImgs[i].naturalHeight < bannerMinHeight){
        bannerMinHeight = bannerImgs[i].naturalHeight;
    }
}