
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1, bin2, bin3;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new bin (650, 650, 25, 75, 0);
	bin2 = new bin (750, 650, 25, 75, 0);
	bin3 = new bin (700, 675, 125, 25, 0);

	paper1 = new paper (100, 600, 20, 20);

//	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(200);
  
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1, paper1.body.position,{x:85, y: -85});

	}

}


