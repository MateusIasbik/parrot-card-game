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


function createDeck() {
    for (let i = 0; i < numberSelected / 2; i++) {
        deckCards.push(backCards[i]);
        deckCards.push(backCards[i]);
    }

    deckCards.sort(comparador); 


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

}

function clickedCard(cardClicked) {
    cardClicked.classList.toggle("back");
    
    let cardName = cardClicked.id;
    console.log(cardName);

    if (!cardClicked.classList.contains("back")) {
        
        let templateCard = `
            <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/${cardName}.gif" alt="${cardName}">
            `;
        cardClicked.innerHTML = templateCard;

        }
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