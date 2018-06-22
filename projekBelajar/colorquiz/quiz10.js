const firstColor = "steelblue";
const backColor = "#232323";
let colors = [];
let nS = 6; // max 6
let pickedColor = "rgb(r, g, b)";

const squares = document.querySelectorAll(".square");
const resetBtn = document.querySelector("#reset");
const rgbSpan = document.querySelector("#colorGuess");
const h1 = document.querySelector("h1");
const modeDiv = document.querySelectorAll(".mode");
const infoSpan = document.querySelector("#info");

resetColor();
giveEventListenerToSquares();
modeEventListener();

resetBtn.addEventListener("click", resetColor);

function giveEventListenerToSquares() {
    for(let i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", function(){
            console.log(this.style.backgroundColor+" "+ pickedColor);
            if(this.style.backgroundColor === pickedColor) {
                resetBtn.textContent = "Play Again";
                infoSpan.textContent = "Correct!";
                h1.style.backgroundColor = pickedColor;
                for(let j=0; j<squares.length; j++){
                    squares[j].style.backgroundColor = pickedColor;
                }
            }else{
                infoSpan.textContent = "Wrong!";
                this.style.backgroundColor = backColor;
            }
        });
    }
}

function modeEventListener() {
    for(let i=0; i<modeDiv.length; i++) {
        modeDiv[i].addEventListener("click", function(){
            modeDiv[0].classList.remove("selected");
            modeDiv[1].classList.remove("selected");

            this.classList.add("selected");
            nS = this.textContent === "Easy"? 3: 6;
            resetColor();
        });
    }
}

function resetColor() {
    resetBtn.textContent = "New Colors";
    infoSpan.textContent = "";

    h1.style.backgroundColor = firstColor;

    colors = generateColors(nS)
    pickedColor = colors[pickColor()];
    rgbSpan.textContent = pickedColor;

    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
}


function pickColor() {
    return Math.floor(Math.random() * colors.length)
}
function generateColors(n) {
    let colors = [];
    for(let i = 0; i<n; i++){
        colors.push(generateRandomColor());
    }
    return colors;
}
function generateRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb("+r+", "+g+", "+b+")";
}