const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var divisons = [];
var pinko = [];
var particles = [];
var score = 0;
var ball;
var count = 0;
var divisonHeight = 300;
var gameState = "start";

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k<=width;k = k+80){
    divisons.push(new Divisons(k,height - divisonHeight/2,10,divisonHeight))
  }

  for( var j = 75; j<=width; j = j+50){
    pinko.push(new Pinko(j,75));
}

for( var j = 75; j<=width; j = j+50){
  pinko.push(new Pinko(j,175));
}

for( var j = 75; j<=width; j = j+50){
  pinko.push(new Pinko(j,275));
}

for( var j = 75; j<=width; j = j+50){
  pinko.push(new Pinko(j,375));
}

}

function draw() {
  background("black");  
  textSize(35);
  text("score :"+ score,20,40)

  textSize(35);
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("100",320,550)
  text("100",400,550)
  text("100",480,550)
  text("200",560,550)
  text("200",640,550)
  text("200",720,550)

  Engine.update(engine);
  ground.display();

  if(gameState == "end"){
    textSize(100)
    text("Game Over",150,250)
  }

  for (var i = 0; i < pinko.length; i++) { 
    pinko[i].display(); 
  } 
  
  if(frameCount%60===0){ 
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10)); 
    score++; 
  } 
  
  for (var j = 0; j < particles.length; j++) { 
    particles[j].display(); 
  } 
  
  for (var k = 0; k < divisons.length; k++) { 
    divisons[k].display(); 
  }
}