var position;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,470,width,20);

  Paper1 = new paper(200,450,40);
  
  dustbin1 = new dustbin(1200,450);

  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  
  dustbin1.display();
  Paper1.display();
  ground.display();
   
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(Paper1.body, Paper1.body.pos,{x:85, y:-85});
  
  }
}