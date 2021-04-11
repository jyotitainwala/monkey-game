
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.05
  
   ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
   
  FoodGroup=new Group();
  obstacleGroup=new Group();
}
  


function draw() {
  background(220);
  
   stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50)

  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivaltime,100,50)
  
  if(keyDown("space")){
monkey.velocityY=-10;
  }
  
monkey.velocityY=monkey.velocityY+0.8
  
  if(ground.x=200){
ground.x=ground.width/2
  }
  
 monkey.collide(ground);
  
 
  
  food();
  stone();
  

  drawSprites();
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(200,200,10,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-4
    banana.lifetime=50;
    FoodGroup.add(banana);
  }
  
}
function stone(){
  if(frameCount%300===0){
    obstacle=createSprite(360,310,20,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
  
}







