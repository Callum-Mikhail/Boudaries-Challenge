// Boudaries Challenge

// Canvas
let cnv = document.getElementById("draw");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;
// Variables
let p1 = {
  x: 280,
  y: 180,
  w: 40,
  h: 40,
  speed: 5,
  color: "Green",
};
let p2 = {
  x: 280,
  y: 240,
  w: 40,
  h: 40,
  speed: 5,
  color: "Blue",
};
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let left2Pressed = false;
let right2Pressed = false;
let up2Pressed = false;
let down2Pressed = false;
// Input Variables
let KeyWIsPressed = false;
let KeyAIsPressed = false;
let KeySIsPressed = false;
let KeyDIsPressed = false;

// Loop
requestAnimationFrame(loop);
function loop() {
  // green boudaries
  if (p1.x < -40) {
    p1.x = 600;
  } else if (p1.x > 600) {
    p1.x = -40;
  }
  if (p1.y < -40) {
    p1.y = 400;
  } else if (p1.y > 400) {
    p1.y = -40;
  }

  // blue boudaries
  if (p2.x <= 0) {
    left2Pressed = false;
  } else if (p2.x >= 560) {
    right2Pressed = false;
  }
  if (p2.y <= 0) {
    up2Pressed = false;
  } else if (p2.y >= 360) {
    down2Pressed = false;
  }

  // Logic
  if (leftPressed) {
    p1.x -= p1.speed;
  } else if (rightPressed) {
    p1.x += p1.speed;
  }
  if (upPressed) {
    p1.y -= p1.speed;
  } else if (downPressed) {
    p1.y += p1.speed;
  }
  if (left2Pressed) {
    p2.x -= p2.speed;
  } else if (right2Pressed) {
    p2.x += p2.speed;
  }
  if (up2Pressed) {
    p2.y -= p2.speed;
  } else if (down2Pressed) {
    p2.y += p2.speed;
  }
  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 600, 400);
  // Green Square
  ctx.fillStyle = p1.color;
  ctx.fillRect(p1.x, p1.y, p1.w, p1.h);
  // Blue Square
  ctx.fillStyle = p2.color;
  ctx.fillRect(p2.x, p2.y, p2.w, p2.h);
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  console.log(e.code);
  if (e.code === "KeyA") {
    leftPressed = true;
  } else if (e.code === "KeyD") {
    rightPressed = true;
  } else if (e.code === "KeyW") {
    upPressed = true;
  } else if (e.code === "KeyS") {
    downPressed = true;
  }
  //Blue
  if (e.code === "ArrowLeft") {
    left2Pressed = true;
  } else if (e.code === "ArrowRight") {
    right2Pressed = true;
  } else if (e.code === "ArrowUp") {
    up2Pressed = true;
  } else if (e.code === "ArrowDown") {
    down2Pressed = true;
  }
}
document.addEventListener("keyup", keyupHandler);

function keyupHandler(e) {
  console.log(e.code);
  if (e.code === "KeyA") {
    leftPressed = false;
  } else if (e.code === "KeyD") {
    rightPressed = false;
  } else if (e.code === "KeyW") {
    upPressed = false;
  } else if (e.code === "KeyS") {
    downPressed = false;
  }
  if (e.code === "ArrowLeft") {
    left2Pressed = false;
  } else if (e.code === "ArrowRight") {
    right2Pressed = false;
  } else if (e.code === "ArrowUp") {
    up2Pressed = false;
  } else if (e.code === "ArrowDown") {
    down2Pressed = false;
  }
}
