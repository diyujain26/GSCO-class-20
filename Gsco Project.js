var car,wall;

function setup(){
    createCanvas(1200,400);
    var car = createSprite(10,400,50,50);
    car.shapeColour("red");
    var wall = createSprite(200,200,10,400)
    wall.shapeColour("red");
}


function draw(){
    background(rgb(0));   
    drawSprites();
}