

// quote generator

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.classList.add("animation")
    setTimeout(() => {
        quote.classList.remove("animation")
    }, 400)
    setTimeout(() => {
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
    }, 200)

}

// tweet

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - " + author.innerHTML, "Tweet Window", "width=600,height=400");
}

// buttons

const popupBtn = document.getElementById('popupBtn')
const closePopupBtn = document.getElementById('closePopupBtn')
const popupContainer = document.getElementById("popupContainer")
const divimg = document.getElementById("image")
const getbtn = document.getElementById("getbtn")


popupBtn.addEventListener('click', () => {
    popupContainer.classList.add('active');
    divimg.classList.add('gayab');
    getbtn.classList.add('gayab');
    popupBtn.classList.add('gayab')
})
closePopupBtn.addEventListener('click', () => {
    popupContainer.classList.remove('active');
    divimg.classList.remove('gayab');
    getbtn.classList.remove('gayab');
    popupBtn.classList.remove('gayab');
})

// Image generator 

var i = 0;

function pickComputerMove() {
    let x = Math.floor(Math.random() * 20) + 1;
    document.body.querySelector("#image").src = "images/" + x + ".jpg";
}

// changing background

const AB = document.getElementById("audioBtn");
var audio = new Audio('TideHerCity.mp3');

AB.src = "images/soundoff.png";

AB.addEventListener("click", () => {
    if (AB.src.includes("images/soundoff.png")) {
        AB.src = "images/soundon.png";
        audio.play();
    } else {
        AB.src = "images/soundoff.png";
        audio.pause();
    }
});
