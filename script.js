let numberSelected = "";



function clickedCard(cardClicked){
    cardClicked.classList.toggle("back");
}

function showCards() {
    const ul = document.querySelector("ul");

    for ( let i = 0; i < numberSelected; i++) {
        let template = `
            <li class="card back" onclick="clickedCard(this)">
                <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt="Parrot card">
            </li>
        `;
        ul.innerHTML += template;
    }
}


function numberCards() {
    
    while (isNaN(numberSelected) || numberSelected < 4 || numberSelected > 14 || numberSelected % 2 === 1){
        numberSelected = Number(prompt("Com quantas cartas quer jogar?"));
    }
    
    return numberSelected;
}

numberCards();
showCards();