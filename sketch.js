const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var fairy,fairyImg,star,starImg,starnight,starnightImg,joySound;
var engine,world;
function preload(){
//preload the images here
fairyImg=loadImage("fairy1.png");
starImg=loadImage("star.png");
starnightImg=loadImage("starnight.png");
joySound=loadSound("JoyMusic.mp3");
}
function setup() {
  createCanvas(670, 600);
  starnight=createSprite(330,300,20,20);
  starnight.addImage(starnightImg);
  starnight.scale=0.4;
  fairy=createSprite(100,400,20,20);
  fairy.addImage(fairyImg);
  fairy.scale=0.2;
  star=createSprite(600,100,20,20);
  star.addImage(starImg);
  star.scale=0.15;
  star.addImage(starImg);
  
  engine=Engine.create();
  world=engine.world
  fairy_options={
isStatic:true 
}
//fairy.x=Bodies.rectangle(400,400,10,20,fairy_options);
World.add(world,fairy);
joySound.play();
}
function draw() {
  background("black");
Engine.update(engine);
//rectMode(CENTER);
fairy.x=fairy.position.x;
fairy.y=fairy.position.y;
if(keyDown("right")||keyDown("space")){
  fairy.x=fairy.x+2;
}
if(keyDown("left")){
  fairy.x=fairy.x-2;
}
if(fairy.position.x>430){
  if(keyDown("down")){
    star.x=fairy.position.x+115
    star.y=fairy.position.y-25
}
}
drawSprites();
}