const body = document.body;
const footer = document.querySelector("footer");

window.onload = function() {
    let kira = body.clientHeight - window.innerHeight;

    if (kira > 0) {
        footer.style.position = "static";
        footer.style.marginTop = "15px";
    } else {
        footer.style.position = "absolute";
    }
}