const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane;
var rubber, rock, iron


function setup(){
   createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rock = new Rock(100,200,50);
    iron = new Iron(50,150,20,50);
    rubber = new Rubber(70,110,50);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rock.display();
    iron.display();
    rubber.display();

    
 
}