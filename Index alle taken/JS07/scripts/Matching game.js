let cardArray = [
    {name: "Obi Wan", img:"Obi Wan Kenobi1.jpg"},
    {name: "Obi Wan", img:"Obi Wan Kenobi1.jpg"},
    {name: "Luke Skywalker2", img:"Luke_Skywalker2.png"},
    {name: "Luke Skywalker2", img:"Luke_Skywalker2.png"},
    {name: "Darth Vader3", img:"Darth Vader3.jpg"},
    {name: "Darth Vader3", img:"Darth Vader3.jpg"},
    {name: "Baby Yoda4", img:"Baby Yoda4.jpg"},
    {name: "Baby Yoda4", img:"Baby Yoda4.jpg"},
    {name: "R2D25", img:"R2D25.jpg"},
    {name: "R2D25", img:"R2D25.jpg"},
    {name: "Mandolorian6", img:"Mandolorian6.jpg"},
    {name: "Mandolorian6", img:"Mandolorian6.jpg"},
];

let grid = document.queryselector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let images;
let cardsId = [];
let carsSelected = [];
let cardsWon = 0;
let clicks = 0;

document.addEventListener("DOMContentLoaded", function () {

    createBoard(grid, cardArray);
    arrangeCard();
    playAgain.addEventListener("click", replay);

    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img =>
        img.addEventListener("click", flipCard)
    )
});

function createBoard(grid, array) {
    popup.style.display = "none";
    array.forEach((arr, index) => {
        let img = document.createElement("img");
        img.setAttribute("src", "blank.png");
        img.setAttribute("data-id", index);
        grid.appendChild(img);
    })
}
function arrangeCard() {
    cardArray.sort(() => 0.5 - Math.random())
}

function flipCard() {
    let selected = this.dataset.id;
    cardsSelected.push(cardArray[selected].name);
    cardsId.push(selected);
    this.classList.add("flip");
    this.setAttribute("src", cardArray[selected].img);
    if (cardsId.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cardsId.forEach(card => card.addEventListener('click', flipCard));