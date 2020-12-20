const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ball, ground, ball1;

function setup() {
  createCanvas(400,400);
myEngine = Engine.create();
myWorld = myEngine.world;

ball = Bodies.rectangle(100,200,50,50);

World.add(myWorld, ball);

console.log(ball);

var options = {
  isStatic: true
}

ground = Bodies.rectangle(200,380,400,10,options);

World.add(myWorld, ground);
var options = {
  restitution:2
}
ball1 = Bodies.circle(300,200,20,options);

World.add(myWorld, ball1);

  
}

function draw() {
  background("lightblue");
  Engine.update(myEngine);
  rectMode(CENTER); 
  rect(ball.position.x, ball.position.y, 50, 50);
  rect(ground.position.x,ground.position.y, 400, 10);
  ellipse(ball1.position.x,ball1.position.y, 40, 40);
  rect(200,200,50,50);
  drawSprites();
}