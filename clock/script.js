const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");



ctx.fillStyle = "white";
ctx.lineCap = "round";
ctx.translate(251, 251);
ctx.arc(0, 0, 215, 0, 2 * Math.PI);
ctx.fill();


function clock() {

  ctx.save();
  ctx.strokeStyle ="#1e1e1e";
  ctx.arc(0, 0, 215, 0, 2 * Math.PI);
  ctx.fill();

  drawHours();
  function drawHours() {
    ctx.lineWidth = 10;
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(0, -200);
      ctx.lineTo(0, -180);
      ctx.stroke();
      ctx.closePath();
      ctx.rotate(Math.PI / 6);
    }
  }

  drawMinutes();
  function drawMinutes() {
    ctx.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        ctx.beginPath();
        ctx.moveTo(0, -200);
        ctx.lineTo(0, -190);
        ctx.stroke();
        ctx.closePath();
      }
      ctx.rotate(Math.PI / 30);
    }
  }

  const date = new Date();
  const msec = date.getMilliseconds();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  let hr = date.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  const button = document.querySelector("button");
  button.innerHTML = date;

  ctx.save();
  ctx.rotate(hr * Math.PI / 6 + min * Math.PI / 360 + sec * Math.PI / 21600 + msec * Math.PI / 21600000);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(0, -100);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate(min * Math.PI / 30 + sec * Math.PI / 1800 + msec * Math.PI / 1800000);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(0, -150);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate(sec * Math.PI / 30 + msec * Math.PI / 30000);
  ctx.strokeStyle = "#ce9178";
  ctx.fillStyle = "#ce9178";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(0, 50);
  ctx.lineTo(0, -180);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);