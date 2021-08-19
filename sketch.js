const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball_2;
var ball_3;
var ball_4;
var ground;
var con;
var con_2;
var con_3;
var con_4;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball_2 = Bodies.circle(200,150,15,ball_options);
  World.add(world,ball_2);

  ball_3 = Bodies.circle(300,150,20,ball_options);
  World.add(world,ball_3);

  ball_4 = Bodies.circle(300,300,20,ball_options);
  World.add(world,ball_4);
  
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      
  con_2 = Matter.Constraint.create({
          bodyA:ball,
          bodyB:ball_2,
          length:100,
          stiffness:0.1
        });

    World.add(world,con_2);

  con_3 = Matter.Constraint.create({
          bodyA:ball,
          bodyB:ball_3,
          length:100,
          stiffness:0.1
        });

    World.add(world,con_3);

  con_4 = Matter.Constraint.create({
          bodyA:ball_2,
          bodyB:ball_4,
          length:100,
         stiffness:0.1
        });

    World.add(world,con_4);
    
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball_2.position.x,ball_2.position.y,15);
  ellipse(ball_3.position.x,ball_3.position.y,20);
  ellipse(ball_4.position.x,ball_4.position.y,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  //line(ball.position.x,ball.position.y,ball_2.position.x,ball_2.position.y);
  line(con_2.bodyA.position.x,con_2.bodyA.position.y,con_2.bodyB.position.x,con_2.bodyB.position.y);
  line(con_3.bodyA.position.x,con_3.bodyA.position.y,con_3.bodyB.position.x,con_3.bodyB.position.y);
  line(con_4.bodyA.position.x,con_4.bodyA.position.y,con_4.bodyB.position.x,con_4.bodyB.position.y);
  
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }

    if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball_2,{x:0,y:0},{x:-0.05,y:0});
    }

    if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball_2,{x:0,y:0},{x:0,y:-0.05});
    }


}

