var fixedRect, movingRect;
var  newRect;
var newRect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  newRect = createSprite(200,200,80,30);
  newRect.shapeColor = "green";
  newRect.debug = true;
  newRect2 = createSprite(300,200,80,30);
  newRect2.shapeColor = "green";
  newRect2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,newRect)){
    movingRect.shapeColor = "blue";
    newRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,newRect2)){
    movingRect.shapeColor = "yellow";
    newRect2.shapeColor = "yellow";
  }
  else
  {
    movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
   newRect.shapeColor = "green";
   newRect2.shapeColor = "green";
  }
  
  drawSprites();
}

//boolean values - true and false
//movingRect as obj1 & fixedRect as obj2





