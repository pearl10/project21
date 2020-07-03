var bullet,wall,thickness;
var speed,weight;




function setup() {
  createCanvas(800,400);
  
  speed=random(223,321)

  weight=random(30,52)

  var wall=createSprites(1200,200,thickness,height/2);
  wall.shapeColour=color(80,80,80)
  
  var car=createSprites(1500,200,60,height/2);
car.velocityX=speed
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x<(wall.width/2-car.width/2)){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed;
   if(deformation>180){
    car.shapeColour=color(white)
  }

thickness=random(22,83)

  if(deformation<180 && deformation >100){
    car.shapeColour=color(230,230,0)
  }
 
  if(deformation<100){
    bullet.shapeColour=color(255,0,0)
  }
  }

  
  
  
  
  
  
  
  
  
  drawSprites();
}