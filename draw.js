//Setup canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); //Now we can use methods to draw
canvas.width = 600;
canvas.height = 600;
ctx.lineWidth = 4;

//Main update method that will redraw everything
const updateCanvas = (numLives, happy) => {
  //Always clear and redraw pole
  clearCanvas();
  drawPole();
  //Draw hangman based on numLives
  if (numLives < 6) face(happy);
  if (numLives < 5) torso();
  if (numLives < 4) leftLeg();
  if (numLives < 3) leftArm();
  if (numLives < 2) rightLeg();
  if (numLives < 1) rightArm();
};

//Helper methods
const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
const drawPole = () => {
  //Base
  ctx.beginPath();
  ctx.moveTo(80, canvas.height - 40);
  ctx.lineTo(canvas.width - 210, canvas.height - 40);
  ctx.stroke();
  //Pole
  ctx.strokeRect(80, 100, 35, 460);
  //Top support
  ctx.strokeRect(80, 69, 300, 30);
  //Angled support
  ctx.transform(1, -0.5, 0, 1, 0, 0);
  ctx.strokeRect(80, 160, 100, 30);
  ctx.resetTransform();
  //Noose
  ctx.beginPath();
  ctx.moveTo(350, 99);
  ctx.lineTo(350, 150);
  ctx.stroke();
};
const leftLeg = () => {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + 50, canvas.height / 4 + 198);
  ctx.lineTo(canvas.width / 2, canvas.height / 4 + 280);
  ctx.stroke();
};
const rightLeg = () => {
  ctx.beginPath(); //Right
  ctx.moveTo(canvas.width / 2 + 50, canvas.height / 4 + 198);
  ctx.lineTo(canvas.width / 2 + 95, canvas.height / 4 + 280);
  ctx.stroke();
};
const torso = () => {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + 50, canvas.height / 4 + 60);
  ctx.lineTo(canvas.width / 2 + 50, canvas.height / 4 + 200);
  ctx.stroke();
};
const face = (happy) => {
  console.log(happy);
  //Head
  ctx.beginPath();
  ctx.arc(canvas.width / 2 + 50, canvas.height / 4 + 30, 30, 0, Math.PI * 2);
  ctx.stroke();

  //Eyes
  ctx.beginPath();
  ctx.arc(canvas.width / 2 + 40, canvas.height / 4 + 15, 5, 0, Math.PI * 2); //Left eye
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(canvas.width / 2 + 60, canvas.height / 4 + 15, 5, 0, Math.PI * 2); //Right eye
  ctx.stroke();

  if (happy) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + 50, canvas.height / 4 + 30, 12, 0, Math.PI); //Smile
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2 + 50,
      canvas.height / 4 + 40,
      12,
      0,
      Math.PI,
      true
    ); //Frown
    ctx.stroke();
  }
};

const rightArm = () => {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + 50, canvas.height / 4 + 80);
  ctx.lineTo(canvas.width / 2 + 90, canvas.height / 4 + 120);
  ctx.stroke();
};
const leftArm = () => {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + 50, canvas.height / 4 + 80);
  ctx.lineTo(canvas.width / 2 + 10, canvas.height / 4 + 120);
  ctx.stroke();
};
