var path, pathImg;
var boy, boy_running;

function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  boy = createSprite (180,350,30,30);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.05
  path = createSprite (200,200); 
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  boy.depth = path.depth;
  boy.depth = boy.depth+1;
}

function draw() {
  background(0);
 path.velocityY = 4;
 boy.x = mouseX
  if (path.y > 400) {
    path.y = height / 2;

   }

drawSprites();
}
