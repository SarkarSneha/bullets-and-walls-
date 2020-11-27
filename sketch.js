//assigning variables
var bullet,wall,thickness;
var speed,weight;
var lbullet,lwall

 function setup() {
    createCanvas(1600,400);
    
    //giving random values to speed , weight and thickness
    speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)
    
    //creating bullet and wall sprites
    bullet=createSprite(50, 200, 59, 10);
    bullet.velocityX=speed;
    wall=createSprite(1200,200,thickness,height/2)

    wall.shapeColor=color(80,80,80)
    bullet.shapeColor=("white")

    
}

function draw() { 
  background("black");
  
 if( hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  //if the damage is greater than 10 change to red
  if(damage>10)
  {
   wall.shapeColor=("red")
  }
  //if the damage is lesser than 10 change to green
   if(damage<10)
  {
    wall.shapeColor=("green")
  }
 }

 
  drawSprites();
    

    
}

 
  //function hasCollided (lbullet,lwall)
 // {
    
  
  //bullet should stop after colliding
  
  //formula of damage
  
 
 // }  
  
    
    
    
function hasCollided (lbullet,lwall)
 { bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false
  }