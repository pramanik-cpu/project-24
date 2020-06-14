var ball,ground;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var  options={
	restitution=0.3,
isStatic=false,
friction=0.5,
dencity=1.2,



}

 var ground_options={
	 isStatic=true,
 }
 ball= Bodies.circle(width/2,200,width,5,options);
 world.add(ball);

 ground= Bodies.rectangle(width/2,650,width,10,Ground_options);
world.add(world,ground);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



