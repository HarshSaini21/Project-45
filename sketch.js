var story;
var bg, bg1, bg2;
var gameState = 0;
var hrithik, HrithikImg;
var gun, gunImg;
var zombie, zombieImg;


function preload(){
  bg = loadImage("bg.jpg");
  bg1 = loadImage("bg1.jpg");
  bg2 = loadImage("bg2.jpg");
  HrithikImg = loadImage("boy.gif");
  gunImg = loadImage("gun.png");
  zombieImg = loadImage("zombie.gif");

}

function setup(){
  createCanvas(800, 400);
  story = new Story();
  zombie = new Zombie()
  hrithik = new Hrithik();
  gun = new Gun();
  
}

function draw(){


  if(gameState === 0){
    background(bg);
  }

  if(gameState === 1){
    background(bg1);
  }

  if(gameState === 2){
    background(bg2);
    zombie.display();
    hrithik.display();
    gun.display();
  }

  story.display();
  

  drawSprites();
}