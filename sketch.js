var movingrect,fixedrect

function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(600, 20, 40, 40);
  movingrect.shapeColor="blue";
  movingrect.velocityY=5;
  fixedrect=createSprite(600,780,40,40);
  fixedrect.shapeColor="blue";
  fixedrect.velocityY=-5;
}

function draw() {
  background(0);  
  if (fixedrect.y-movingrect.y===fixedrect.height/2+movingrect.height/2){
    fixedrect.velocityY=-fixedrect.velocityY;
    movingrect.velocityY=-movingrect.velocityY;
  }
  drawSprites();
}