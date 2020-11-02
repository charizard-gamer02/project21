var bullet,wall;
var speed,weight, thickness;
function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 10, 60);
 bullet.shapeColor="black"
 wall=createSprite(1500,200,thickness,height/2)
 wall.shapeColor=color(80,80,80)
  speed=random(223,321)
  
  weight=random(30,52)
  bullet.velocityX=speed
}
thicness=random(22,83)
 
function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<(bullet.width+wall.width/2)){
    bullet.velocityx=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>100){
      wall.shapeColor=color(255,0,0)
    }
    if(damage < 100){
      wall.shapeColor=color(0,255,0)
    
      
    }
    
     
    
  }
  drawSprites();
}