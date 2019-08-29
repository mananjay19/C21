var fixrect,movingrect;
var obj1,obj2;
function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  fixrect.debug="true";
  movingrect=createSprite(600, 200, 50, 50);
  fixrect.velocityX=4;
  movingrect.velocityX=-4;
  obj1=createSprite(200,200,50,60);
  obj2=createSprite(100,200,50,30);
}

function draw() {
  background(255,255,255); 
  obj1.x=World.mouseX;
  obj1.y=World.mouseY;
  if(isTouching(obj1,obj2)){
    obj1.shapeColour("yellow");
    obj2.shapeColour("yellow");
  }
  else{
    obj1.shapeColour("green");
    obj2.shapeColour("green");
  }
  bounceoff(fixrect,movingrect);
  drawSprites();
}
