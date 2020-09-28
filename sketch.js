function setup() {
  createCanvas(800,400);
  wall=createSprite(50,300, 1500, 5);
  wall=createSprite(50,100, 1500, 5);
  wall=createSprite(50,200, 1500, 5);
  wall=createSprite(770,350, 20, 40);
  wall=createSprite(770,350, 20, 40);
  wall=createSprite(770,150, 20, 40);
  wall=createSprite(770,250, 20, 40);
  wall=createSprite(770,150, 20, 40);
  wall=createSprite(770,50, 20, 40);
  car1=createSprite(750,150, 20, 5);
  car1.shapeColor="green";
  car2=createSprite(750,350, 20, 5);
  car2.shapeColor="white";
  car3=createSprite(750,250, 20, 5);
  car3.shapeColor="red";
  car4=createSprite(750,50, 20, 5);
  car4.shapeColor="blue";
  


}

function draw() {
  background("black");  

  car4.velocityX=-2;


  drawSprites();
}