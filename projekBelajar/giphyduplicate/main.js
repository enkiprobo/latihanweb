const d = document;

const divCol1 = d.querySelectorAll(".col-type-1")[0];
const divCol2 = d.querySelectorAll(".col-type-1")[1];
const divCol3 = d.querySelectorAll(".col-type-1")[2];
const divCol4 = d.querySelectorAll(".col-type-1")[3];
const divCenterContent = d.querySelector(".content-center");
const divLoading = d.querySelector(".loading");
const inputSearch = d.querySelector("input[type='text'");
const divSearchBar = d.querySelector(".search-bar");

const divCols = [divCol1, divCol4, divCol2, divCol3];

const API_KEY = "NvjRceTI0NlbL4drLVk51pB606OGy2nt";
const API_HOST = "https://api.giphy.com";
const TRENDING_PATH = API_HOST+"/v1/gifs/trending";
const SEARCH_PATH = API_HOST+"/v1/gifs/search";

let contentCount = 0;
let query = "";
let path_now = TRENDING_PATH;
let loading = false;

function loadData(path) {
    fetch(path+"?api_key="+API_KEY+"&offset="+contentCount+"&limit="+25+"&q="+query)
        .then((response) => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse.data);

            fillColumn(jsonResponse.data);
        });
}

function fillColumn(giphyGifs) {
    let i = contentCount;
    for (gif of giphyGifs) {
        let divContNew = newContent(gif.images.downsized_large.url, gif.id);
        if (i === 0) {
            divCenterContent.appendChild(divContNew.children[0]);
        } else {
            divCols[(i-1)%4].appendChild(divContNew);
        }
        i++;
    }
    contentCount = i+1;
    loading = false;
}

function newContent(picUrl, picID) {
    let imgNew = document.createElement("img");
    imgNew.src = picUrl;
    imgNew.alt = picID;
    let divContNew = document.createElement("div");
    divContNew.classList.add("content");
    divContNew.appendChild(imgNew);
    return divContNew;
}

function deleteAllChild(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function reset() {
    for (divCol of divCols) {
        deleteAllChild(divCol);
    }
    divCenterContent.removeChild(divCenterContent.firstElementChild);

    contentCount = 0;
}

inputSearch.onkeypress = function(e) {
    if (e.which === 13 && inputSearch.value !== ""){
        reset();

        query = inputSearch.value;
        path_now = SEARCH_PATH;
        loadData(path_now);
    }
} 

window.onload = function() {
    loadData(path_now);
}

window.onscroll = function() {
    if (window.pageYOffset > divLoading.offsetTop - window.innerHeight && !loading) {
        loading = true;
        loadData(path_now);
    }

    if (window.pageYOffset >= inputSearch.offsetTop){
        let logo = d.querySelectorAll(".logo")[1];
        logo.style.display = "flex";
        divSearchBar.classList.add("fixed-search");
    } else {
        let logo = d.querySelectorAll(".logo")[1];
        logo.style.display = "none";
        divSearchBar.classList.remove("fixed-search");
    }
}