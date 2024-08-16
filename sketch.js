
let posicaoVertical;

function setup() {
  createCanvas(500, 500);  
  posicaoVertical = 250;
}

function draw() {
  if(posicaoVertical < 400){
    background("lightblue");
    posicaoVertical=posicaoVertical + 1
  }
      fill("orange");
  background
  circle(250, posicaoVertical, 300);
  fill("#2007FF");
  rect(0, 250, 500, 350);
  fill("#FFC107");
  rect(0, 400, 500, 100);
}