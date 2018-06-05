const butNav = document.querySelector(".button-right-top");
const ulNav = document.querySelector("nav ul");
const header = document.querySelector("header");
const divGrid1 = document.querySelectorAll(".content-grid")[0];
const divPar1 = document.querySelectorAll(".content-parallax")[0];
const divGrid2 = document.querySelectorAll(".content-grid")[1]
const divPar2 = document.querySelectorAll(".content-parallax")[1];
const lis = document.querySelectorAll("li");

const conts = [header, divGrid1, divPar1, divPar2];
const axises = [];

function resetCoor() {
    while(axises.length > 0){
        axises.pop();
    }

    for (cont of conts) {
        let axisY = cont.offsetTop;
        if (window.innerWidth >= 768){
            axisY -= ulNav.offsetHeight;
        }
        console.log(axisY);
        axises.push(axisY);
    } 

    for (let i = 0; i < lis.length-1; i++) {
        lis[i].onclick = function() {
            console.log(axises[i]);
            window.scroll(0,axises[i]);
            if (window.innerWidth < 768) {
                ulNav.style.display = "none";
            }
        }
    }
}
function resetOnResize()  {
    resetCoor();

    window.onscroll = function() {
        let now = window.pageYOffset;
    
        let len = axises.length;
        let i = len-1;
        while (axises[i] > now ){
            i--;
        }
        let lis = document.querySelectorAll("li");
        for (l of lis) {
            l.classList.remove("current");
        }
        lis[i].classList.add("current");
    }
}

butNav.onclick = function() {
    let curState = ulNav.style.display;
    if (curState === "none"){
        ulNav.style.display = "block";
    } else {
        ulNav.style.display = "none";
    }
}

window.onload = resetOnResize;
window.onresize = resetOnResize;