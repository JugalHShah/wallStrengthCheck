var bullet;
var wall;
var speed,weight;
var deformation;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(233,231)
  weigt=random(30,52)
  thickness=random(22,83)
  
  wall =createSprite(1200,200,hickness,height/2);
  wall.shapeColor="80,80,80";

  bullet=createSprite(50,200,20,30);
  bullet.velocityX=bulletSpeed;
  bullet.shapeColor="white";

  damage=(bulletSpeed*bulletSpeed*weigt*0.5)/thickness*thickness*thickness;

  if((bullet.x-wall.x<bullet.width/2+wall.width/2)&&damage<10){
    wall.shapeColor="0,255,0";
  }
 
  
  if((bullet.x-wall.x<bullet.width/2+wall.width/2)&&damage>10){
    wall.shapeColor="250,0,0";
  }
}

function draw() {
 
 background(255,255,255); 
 // console.log (car.x) 
 
  drawSprites();
}