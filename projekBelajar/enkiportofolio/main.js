const body = document.body;
const buttonSeeMore = document.querySelector("button");
const ulNav = document.querySelector("ul");

buttonSeeMore.onclick = function() {
    if(body.clientWidth < 481) {
        ulNav.style.display = "block";
    }
}

ulNav.onclick = function() {
    if(body.clientWidth < 481) {
        ulNav.style.display = "none";
    }
}

window.onload = function() {
    let kira = body.clientHeight - window.innerHeight;

    if (kira > 0) {
        body.style.position = "relative";
    } else {
        body.style.position = "static";
    }
}