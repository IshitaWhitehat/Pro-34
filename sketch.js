const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes=[];
var box=[];
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  
  for(var j=0;j<6;j++){
      for(var i=0;i<8;i++){
        boxes.push(new Box(j*70+500,i*70+00,70,70));
      }
  }
 
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  
  for(var i=0;i<boxes.length;i++){
    boxes[i].display();
  }

  hero.display();
  //rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
