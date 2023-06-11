var player;
var fondo;
var cloud;
var ground;
var platform;
var lineas;
var playerJump;
var groundSprite;
var playerSprite;

function preload(){
  player = loadImage("./sprites juego/player.png");
  fondo = loadImage("./sprites juego/background.png");
  cloud = loadImage("./sprites juego/cloud.png");
  ground = loadImage("./sprites juego/ground.png");
  platform = loadImage("./sprites juego/platform.png");
  lineas = loadImage("./sprites juego/screen.png");
  playerJump = loadImage("./sprites juego/player Jump.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  groundSprite = createSprite(0,height,width-100, 40);
  groundSprite.addImage(ground);
  groundSprite.scale= 2.0

  playerSprite = createSprite(70,height-155,50,50);
  playerSprite.addImage("player",player);
  playerSprite.addImage("Jump",playerJump);
  
}

function draw() {
  background("red");
  image(fondo,0,0,width,height)
 //groundSprite.velocityX = -5
  if (keyDown("d")){
    playerSprite.x = playerSprite.x+10;
  }
  if (keyDown("space")){
    playerSprite.velocityY =-5;
  }
  playerSprite.velocityY = playerSprite.velocityY+0.5;
  playerSprite.collide(groundSprite);
  drawSprites();
}


