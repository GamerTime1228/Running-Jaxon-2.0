var runnerImg1
var pathImg

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg1 = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,350);
  runner.addAnimation("runner", runnerImg1);
  runner.scale = 0.1;



}

function draw() {
  background(0);
  drawSprites();

  runner.x = World.mouseX;

  if(path.y > 400) {
    path.y = height / 2;
  }

}
