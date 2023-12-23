const playBoard = document.querySelector(".play-board");

// Coordonnées initiales de la nourriture du serpent
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakBody = [];
let velocityX = 0, velocityY = 0;

/**
 * La fonction "changeFoodPosition" utilise Math.random() pour générer des coordonnées
 * aléatoires pour la nourriture du serpent.
 */
const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

/**
 * La fonction "changeDirection" ajuste les variables de vélocité en fonction de la touche
 * fléchée appuyée par l'utilisateur.
 */
const changeDirection = (e) => {
    switch (e.key) {
        case "ArrowUp":
            velocityX = 0;
            velocityY = -1;
            break;
        case "ArrowDown":
            velocityX = 0;
            velocityY = 1;
            break;
        case "ArrowLeft":
            velocityX = -1;
            velocityY = 0;
            break;
        case "ArrowRight":
            velocityX = 1;
            velocityY = 0;
            break;
    }
};

/**
 * La fonction "initGame" initialise le jeu en créant la balise div représentant la
 * nourriture du serpent et en mettant à jour la position du serpent.
 */
const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakBody.push([foodX, foodY]);
        console.log(snakBody);
    }

    for (let i = snakBody.length - 1; i > 0; i--) {
        snakBody[i] = snakBody[i - 1];
    }

    snakBody[0] = [snakeX, snakeY];
    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = 0; i < snakBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakBody[i][1]} / ${snakBody[i][0]}"></div>`;
    }

    playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
