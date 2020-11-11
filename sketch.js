//Hungry monkey

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;


//GameStates
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//Preload
function preload(){
  
  
  //Monkey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //Banana
  bananaImage = loadImage("banana.png");
  //Obstacle
  obstacleImage = loadImage("obstacle.png");
 
}


//Setup
function setup() {
  //Canvas
  createCanvas(400,400);
  
  //Groups
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  TimeGroup = createGroup();
  
  //Monkey
  monkey = createSprite(50, 250, 10, 10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
 //Ground
  ground = createSprite(70, 350, 800, 10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  //score
  score = 0;
  
}

//Draw
function draw() {
  background("white");  
  
    textSize(25);
     text("Score: "+ score, 150,50);
  if(monkey.isTouching(bananaGroup)){
   score=score+1;
    bananaGroup.destroyEach();
    
  }

  
  if (ground.x===0)
  {
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")&&monkey.y>=300)
  {
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.6;
  monkey.collide(ground);
  
  Banana();
  Obstacle();
  drawSprites();
}

function Banana()
{
  if(World.frameCount%80===0)
  {
    var banana= createSprite(400,random(160,240),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.05;
    banana.lifetime=110;
    bananaGroup.add(banana);
  }
}

function Obstacle()
{
  if (World.frameCount%300===0)
  {
    var obstacle= createSprite(390,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.lifetime=110;
    obstacleGroup.add(obstacle);
    monkey.collide(obstacle);
  }
}


  

 
 


