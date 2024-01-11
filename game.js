const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0,
};

const playerImage = new Image();
playerImage.src = "player.png";

// Handle keyboard input
const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function handleInput() {
    player.dx = 0;
    player.dy = 0;

    if (keys["ArrowUp"]) {
        player.dy = -player.speed;
    }
    if (keys["ArrowDown"]) {
        player.dy = player.speed;
    }
    if (keys["ArrowLeft"]) {
        player.dx = -player.speed;
    }
    if (keys["ArrowRight"]) {
        player.dx = player.speed;
    }
}

function update() {
    player.x += player.dx;
    player.y += player.dy;

    // Add boundary checks if needed
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    handleInput();
    update();

    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    requestAnimationFrame(gameLoop);
}

gameLoop();

