const playBoard = document.querySelector(".play-board");

//coordonnées initiales de la nourriture du serpent
let foodX, foodY;
let snakeX = 5 , snakeY = 10;
let velocityX = 0, velocityY = 0;

/**
la fonction JavaScript "Math.random()" qui renvoie un nombre aléatoire compris entre 0 et 1. Les valeurs retournées sont ensuite multipliées par 30 et arrondies vers le bas en utilisant la fonction JavaScript "Math.floor()". Les valeurs sont ensuite ajustées de 1 pour obtenir des coordonnées comprises entre 1 et 30 (inclus)
**/
const changeFoodPosition = ()=>{
    foodX = Math.floor(Math.random()*30) + 1;
    foodY = Math.floor(Math.random()*30) + 1;
}

const changeDirection = (e)=>{
   // console.log(e);
    if(e.key === "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }else if(e.key === "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}

// La fonction "initGame" crée une balise div avec la classe CSS "food" qui représente la nourriture du serpent et la place à l'aide de "grid-area" à des coordonnées spécifiées par les variables "foodX" et "foodY"
const initGame =()=>{
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
    }
    
    //met à jour les variables "velocityX" et "velocityY" en fonction de la touche de direction appuyée,
    snakeX += velocityX;
    snakeY += velocityY;
    htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);