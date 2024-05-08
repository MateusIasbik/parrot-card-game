let numberSelected = "";

const backCards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

let deckCards = [];

let cardOne = "";
let cardTwo = "";

let clickCount = 0;
let firstCardId = "";
let secondCardId = "";
let score = 0;
let moves = 0;
let clock = 0;



function timer(){
    clock++;
    let seconds = document.querySelector(".clock p");
    seconds.innerHTML = clock;
}

setInterval(timer, 1000);

function createDeck() {
    for (let i = 0; i < numberSelected / 2; i++) {
        deckCards.push(backCards[i]);
        deckCards.push(backCards[i]);
    }

    deckCards.sort(comparador);

    function comparador() {
        return Math.random() - 0.5;
    }
}

function differentCards(cardClicked) {
    let templateCard = `
    <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt="Parrot card">
    `;
    cardClicked.innerHTML = templateCard;
}

function matchingCards(firstCard, secondCard){
    firstCard.classList.add("disableCard");
    secondCard.classList.add("disableCard");
    cardOne = "";
    cardTwo = "";
}

function compareCards(){
    if (firstCardId !== "" && secondCardId !== ""){
        if (firstCardId !== secondCardId) {
            differentCards(cardOne);
            differentCards(cardTwo);
            cardOne.classList.toggle("back");
            cardTwo.classList.toggle("back");
        }
        
        else if (firstCardId === secondCardId){
            matchingCards(cardOne, cardTwo);
            score++;
        }
        
        clickCount = 0;
        firstCardId = "";
        secondCardId = "";
    } 
}

function clickedCard(cardClicked) {

    if (clickCount >= 2) {
        return;
    }

    cardClicked.classList.toggle("back");

    if (!cardClicked.classList.contains("back")) {
        let cardName = cardClicked.id;
        
        if (clickCount === 0) {
            firstCardId = cardName;
            cardOne = cardClicked;
        } else if (clickCount === 1) {
            secondCardId = cardName;
            cardTwo = cardClicked;

            setTimeout(compareCards, 1000);
        }

        clickCount++;  

        let templateCard = `
        <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/${cardName}.gif" alt="${cardName}">
        `;
        cardClicked.innerHTML = templateCard;
    } 

    moves++;

    console.log(cardOne);
    console.log(cardTwo);

}

function showCards() {
    const ul = document.querySelector("ul");
    createDeck();

    for (let i = 0; i < numberSelected; i++) {
        let template = `
            <li class="card back" id="${deckCards[i]}" onclick="clickedCard(this)">
                <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt="Parrot card">
            </li>
        `;
        ul.innerHTML += template;
    }
}

function numberCards() {

    while (isNaN(numberSelected) || numberSelected < 4 || numberSelected > 14 || numberSelected % 2 === 1) {
        numberSelected = Number(prompt("Com quantas cartas quer jogar?"));
    }

    return numberSelected;
}

numberCards();
showCards();
