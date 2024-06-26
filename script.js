const backCards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

let numberSelected = "";
let deckCards = [];
let cardOne = "";
let cardTwo = "";
let clickCount = 0;
let firstCardId = "";
let secondCardId = "";
let score = 0;
let totalMovements = 0;
let clock = 0;
let timerInterval;
let cardName = "";
let cardUsed = "";

function finishGame() {
    if (numberSelected / 2 === score) {
        alert(`Você ganhou em ${totalMovements} jogadas!`)
        clearInterval(timerInterval);

        const refreshGame = window.confirm('Deseja jogar novamente?');
        if (refreshGame) {
            location.reload();
        }
    }
}

function timer() {
    if (totalMovements >= 1) {
        clock++;
        let seconds = document.querySelector(".clock p");
        seconds.innerHTML = clock;
        finishGame();
    }
}

timerInterval = setInterval(timer, 1000);

function matchingCards(firstCard, secondCard) {
    firstCard.classList.add("disableCard");
    secondCard.classList.add("disableCard");
    cardOne = "";
    cardTwo = "";
}

// function differentCardsTwo() {
//     let templateCard = `
//     <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt="Parrot card">
//     `;
//     cardTwo.innerHTML = templateCard;
// }

function differentCards() {
    let templateCard = `
    <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt="Parrot card">
    `;
    cardOne.innerHTML = templateCard;
    cardTwo.innerHTML = templateCard;
    cardOne.classList.remove("disableCard");
    cardTwo.classList.remove("disableCard");
}

function compareCards() {
    if (firstCardId !== "" && secondCardId !== "") {
        if (firstCardId !== secondCardId) {
            setTimeout(differentCards, 220);
            // setTimeout(differentCardsTwo, 220);
            cardOne.classList.toggle("back");
            cardTwo.classList.toggle("back");
        } else if (firstCardId === secondCardId) {
            matchingCards(cardOne, cardTwo);
            score++;
        }
        clickCount = 0;
        firstCardId = "";
        secondCardId = "";
    }
}

function changeCard() {
    let templateCard = `
    <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/${cardName}.gif" alt="${cardName}">
    `;
    cardUsed.innerHTML = templateCard;
}

function clickedCard(cardClicked) {
    cardUsed = cardClicked;
    if (clickCount >= 2) {
        return;
    }

    cardClicked.classList.toggle("back");

    if (!cardClicked.classList.contains("back")) {
        cardName = cardClicked.id;
        cardClicked.classList.add("disableCard");
        setTimeout(changeCard, 220);

        if (clickCount === 0) {
            firstCardId = cardName;
            cardOne = cardClicked;

        } else if (clickCount === 1) {
            secondCardId = cardName;
            cardTwo = cardClicked;
            setTimeout(compareCards, 1000);
        }
        clickCount++;
    }
    totalMovements++;
}

function comparador() {
    return Math.random() - 0.5;
}

function createDeck() {
    for (let i = 0; i < numberSelected / 2; i++) {
        deckCards.push(backCards[i]);
        deckCards.push(backCards[i]);
    }
    deckCards.sort(comparador);
    comparador();
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
        numberSelected = Number(prompt("Com quantas cartas pares, entre 4 a 14, quer jogar?"));
    }
    // return numberSelected;
    showCards();
}

numberCards();
