const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameArea = document.getElementById("game-container");

const playerWidth = player.offsetWidth;
const playerHeight = player.offsetHeight;
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;

let playerX = 0;
let playerY = 75;
let enemyX = Math.random() * (gameWidth - playerWidth);
let enemyY = Math.random() * (gameHeight - playerHeight);

let gameOver = false;
let keys = {};

function gameLoop() {
handlePlayerMovement();
moveEnemyTowardsPlayer();
updatePlayerPosition();
updateEnemyPosition();
checkCollisions();

if(!gameOver) {
    requestAnimationFrame(gameLoop);
}else {
    endGame();
}
}

function endGame() {
    alert("GAME OVER");
    resetGame();
}

function resetGame() {
    let playerX = 0;
    let playerY = 75;
    let enemyX = Math.random() * (gameWidth - playerWidth);
    let enemyY = Math.random() * (gameHeight - playerHeight);
    keys = {};
    player.style.opacity = 1;
    gameOver = false;
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);