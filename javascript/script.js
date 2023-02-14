const playBoard = document.querySelector(".play-board");

//coordonnées initiales de la nourriture du serpent
let foodX, foodY;
let snakeX = 5 , snakeY = 10;


/**
la fonction JavaScript "Math.random()" qui renvoie un nombre aléatoire compris entre 0 et 1. Les valeurs retournées sont ensuite multipliées par 30 et arrondies vers le bas en utilisant la fonction JavaScript "Math.floor()". Les valeurs sont ensuite ajustées de 1 pour obtenir des coordonnées comprises entre 1 et 30 (inclus)
**/
const changeFoodPosition = ()=>{
    foodX = Math.floor(Math.random()*30) + 1;
    foodY = Math.floor(Math.random()*30) + 1;
}

// La fonction "initGame" crée une balise div avec la classe CSS "food" qui représente la nourriture du serpent et la place à l'aide de "grid-area" à des coordonnées spécifiées par les variables "foodX" et "foodY"
const initGame =()=>{
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`
    playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
initGame();