//assigning variables
var car,wall
var speed,weight

 function setup() {
    createCanvas(1600,400);
    
    //giving random values to speed and weight
    speed=random(55,90)
    weight=random(400,1500)
    
    //creating car and wall sprites
    car=createSprite(50, 200, 50, 50);
   

    wall=createSprite(1500,200,60,height/2)

    wall.shapeColor=color(80,80,80)
    car.shapeColor=color(225,225,225)

 


}

function draw() {
    background(0);
//the change
 car.velocityX=speed;
    //changing colors according to the deformation rate 
    if(wall.x-car.x<(car.width+wall.width)/2)
     {
      //car should stop after colliding
      car.velocityX=0;
      //formula of deformation
      var deformation=0.5*weight*speed*speed/22509;
      //if the deformation is greater than 180 considering it lethal as red
      if(deformation>180)
      {
        car.shapeColor=("red")
      }
      //if the deformation is between 100 and 180 considering it average as yellow
      if(deformation<180 && deformation>100)
      {
        car.shapeColor=("yellow")
      }
      //if the deformation is lesser than 100 considering it good as green
      if(deformation<100)
      {
        car.shapeColor=("green")
      }
      }  
  drawSprites();
      }