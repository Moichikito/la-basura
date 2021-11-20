const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paperObject,groundObject 
var world,engine;


function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

     //agrega el motor fisico a tu mundo
    engine = Engine.create();
    world = engine.world;
    
    groundObject=new ground(width/2,670,width,20);
    dustbinObj=new dustbin(1200,650);

    //crea tu objeto papel en setup
    paperObject=new paper(200,450,70);

   //crea tu suelo
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1600,
        height: 700,
        wireframes: false
      }
    });

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

   // dibuja tus objetos
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}

// asigna controles en una funcion
function keyPressed() {
    if (keyCode === UP_ARROW) {

     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
    }
}
