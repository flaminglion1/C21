var fr,mr,ob,o1,o2,o3,o4;

function setup() {
  createCanvas(800,400);
  
ob=createSprite(400,200,50,90);
//sob.velocityY = -3;


car=createSprite(100,100,50,50);
car.shapeColor="lime";

wall=createSprite(100,200,50,50);
wall.shapeColor="lime";
wall.velocityY = -3;

o3=createSprite(100,300,50,50);
o3.shapeColor="lime";

o4=createSprite(100,400,50,50);
o4.shapeColor="lime";

  fr=createSprite(200,300,40,70);
fr.shapeColor = "orange"

mr=createSprite(500,200,70,40);
mr.shapeColor = "yellow"
}

function draw() {
  background("cyan");  
  
  
mr.x=mouseX;
mr.y=mouseY;
if(isTouching(mr,car)){
  mr.shapeColor="brown";
  car.shapeColor="brown";
}
else{
  mr.shapeColor="lightblue";
car.shapeColor="lightblue";
}

bounceOff(mr,wall);
  drawSprites();
}




