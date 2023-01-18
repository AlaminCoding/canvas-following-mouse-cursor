const canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 500;

let h = canvas.height;
let w = canvas.width;
const center = {
  x: w / 2,
  y: h / 2,
};
const _2PI = 2 * Math.PI;
const ctx = canvas.getContext("2d");
function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
}

clearCanvas();

let mouseX = 50;
let mouseY = 50;
let delay = 15;
let newMouseX = 0;
let newMouseY = 0;

function drawCircle() {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(newMouseX, newMouseY, 50, 0, _2PI);
  ctx.fill();
  ctx.restore();
}

drawCircle();

function drawText() {
  ctx.fillStyle = "rgba(255, 255, 255)";
  ctx.font = "30px sans-serif";
  ctx.fillText("HELLO", 100, 100);
  ctx.fillText("YO YO", 150, 150);
  ctx.fillText("LO LO", 200, 200);
}

drawText();

const rect = canvas.getBoundingClientRect();

canvas.addEventListener("mousemove", function (event) {
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

function followMouse() {
  requestAnimationFrame(followMouse);
  newMouseX += (mouseX - newMouseX) / delay;
  newMouseY += (mouseY - newMouseY) / delay;
  clearCanvas();
  drawCircle();
  drawText();
}

followMouse();
