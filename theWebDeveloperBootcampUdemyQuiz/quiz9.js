// initialize the tag holder
const button = document.querySelector("button");
const body = document.querySelector("body");
// initialize variable that will needed
let toogle = true;
// initialize function that will needed
const toggleBackground = () => {
    body.style.backgroundColor = ((toogle)?"blue": "purple");
    toogle = !toogle;
}
const toggleBackgroundV2 = () => {
    document.body.classList.toggle("purple"); // and you must created class purple that will change color of body color
}
// MAIN PROGRAM
button.addEventListener("click", toggleBackground);