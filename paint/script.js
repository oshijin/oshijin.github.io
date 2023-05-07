const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const color = document.querySelector("#color");
const normal = document.querySelector("#normal");
const bold = document.querySelector("#bold");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const save = document.querySelector("#save");

let isDraw = false;
let x = 0;
let y = 0;

ctx.strokeStyle = "#ce9178";
ctx.lineCap = "round";
ctx.fillStyle = "#1e1e1e"
ctx.fillRect(0, 0, 502, 502);

canvas.addEventListener("mousedown", (e) => {
  isDraw = true;
  x = e.offsetX;
  y = e.offsetY;
  ctx.beginPath();
  ctx.moveTo(x, y);
});

canvas.addEventListener("mouseup", () => {
  isDraw = false;
  ctx.closePath();
});

canvas.addEventListener("mouseleave", () => {
  isDraw = false;
  ctx.closePath();
});

canvas.addEventListener("mousemove", (e) => {
  if (isDraw) {
    x = e.offsetX;
    y = e.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

normal.addEventListener("click", () => {
  ctx.globalCompositeOperation = "source-over";
  ctx.lineWidth = 1;
  canvas.style.cursor = "crosshair";

  normal.style.color = "#d4d4d4";
  normal.style.backgroundColor = "#1e1e1e";
  bold.style.color = "#1e1e1e";
  bold.style.backgroundColor = "#d4d4d4";
  eraser.style.color = "#1e1e1e";
  eraser.style.backgroundColor = "#d4d4d4";
});

bold.addEventListener("click", () => {
  ctx.globalCompositeOperation = "source-over";
  ctx.lineWidth = 5;
  canvas.style.cursor = "crosshair";

  bold.style.color = "#d4d4d4";
  bold.style.backgroundColor = "#1e1e1e";
  normal.style.color = "#1e1e1e";
  normal.style.backgroundColor = "#d4d4d4";
  eraser.style.color = "#1e1e1e";
  eraser.style.backgroundColor = "#d4d4d4";
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, 502, 502);
});

eraser.addEventListener("click", () => {
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = 20;
  canvas.style.cursor = "cell";

  eraser.style.color = "#d4d4d4";
  eraser.style.backgroundColor = "#1e1e1e";
  normal.style.color = "#1e1e1e";
  normal.style.backgroundColor = "#d4d4d4";
  bold.style.color = "#1e1e1e";
  bold.style.backgroundColor = "#d4d4d4";
});

save.addEventListener("click", () => {
  const dataURL = canvas.toDataURL();
  let paint = document.createElement("a");
  paint.href = dataURL;
  paint.setAttribute("download", "paint");
  paint.click();
});

color.addEventListener("change", () => {
  ctx.strokeStyle = color.value;
});