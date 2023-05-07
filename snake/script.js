const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "#1e1e1e";
for (let i = 0; i <= 20; i++) {
  for (let j = 0; j <= 20; j++) {
    ctx.fillRect(j * 25 + 2, i * 25 + 2, 23, 23)
  }
}

let snakeX = 0;
let snakeY = 0;
let dir = "ArrowRight";
let arr = [];
let length = 1;

function drawSnake() {
  ctx.fillStyle = "#d4d4d4";
  ctx.fillRect(snakeX + 4, snakeY + 4, 19, 19);
  arr.push({ "snakeX": snakeX, "snakeY": snakeY });

  if (arr.length > length) {
    const del = arr.shift();
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(del["snakeX"] + 4, del["snakeY"] + 4, 19, 19);
  }

  if (snakeX === foodX && snakeY === foodY) {
    length++;
    drawFood();
  }

  if (snakeX < 0 || snakeX > 475 || snakeY < 0 || snakeY > 475) {
    clearInterval(id);
    idea = 0;
    ctx.fillRect(0, 0, 502, 502);
    ctx.fillStyle = "#d4d4d4";
    ctx.textAlign = "center";
    ctx.font = "50px 'Courier New'";
    ctx.fillText('GAME OVER', 251, 251);
  }

  switch (dir) {
    case "ArrowLeft": snakeX -= 25; break;
    case "ArrowUp": snakeY -= 25; break;
    case "ArrowRight": snakeX += 25; break;
    case "ArrowDown": snakeY += 25; break;
  }
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft": dir = "ArrowLeft"; break;
    case "ArrowUp": dir = "ArrowUp"; break;
    case "ArrowRight": dir = "ArrowRight"; break;
    case "ArrowDown": dir = "ArrowDown"; break;
  }
});

let foodX = 0;
let foodY = 0;

function drawFood() {
  foodX = Math.floor(Math.random() * 20) * 25;
  foodY = Math.floor(Math.random() * 20) * 25;
  ctx.fillStyle = "#ce9178";
  ctx.fillRect(foodX + 4, foodY + 4, 19, 19);
}

const start = document.querySelector("#start");

drawFood();

let idea = 1;

start.addEventListener("click", () => {
  if (idea === 1) {
    id = setInterval(drawSnake, 100);
    start.innerHTML = "RESET";
  } else {
    window.location.reload();
    start.innerHTML = "START";
  }
});