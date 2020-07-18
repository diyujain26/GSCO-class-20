var car,wall;
var speed,weight;
function setup() {
    createCanvas(1600,400);
    car = createSprite(25, 200, 50, 50);
    car.shapeColor = "red";
    wall = createSprite(1350,200,30,height/2)
    wall.shapeColor = "blue";
    speed = random(55,90);
    weight = random(400,1500);
}

function draw() {
  background(200);
    //car.collide(wall);
     car.velocityX = speed;  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
      car.velocityX = 0;
      var deformation=0.5 * weight * speed * speed/22509;
      if (deformation>180)
  {
      car.shapeColor = color(175,0,0)
  }

  if (deformation<180 && deformation>100)
  {
       car.shapeColor = color(230,230,0);
  }

  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }

  }
  drawSprites();
}