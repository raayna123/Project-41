const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops = [];

var umbrella;
var drop;
var thunderImg;
var thunder;

function peoload() {
  thunderImg = loadImage("images/1.png");
}

function setup() {
  createCanvas(350,600);
  // createSprite(400, 200, 50, 50);

  // thunder = createSprite(200, 50, 20, 20);
  // thunder.addImage("thunder", thunderImg);

  engine = Engine.create();
  world = engine.world;
  
  umbrella = new Umbrella(100, 500, 85, 85);
  
  // drop = new Drop(100, 300, 20, 20);
  thunder = new Thunder(200, 50, 140, 140);

  Engine.run(engine);
}

function draw() {
  background("black"); 

  if(frameCount % 20 === 0) {
    drops.push(new Drop(random(100, 200 || 300, 400), 10, 5));
    console.log(drops.radius);
  }


  for(var k = 0; k < drops.length; k++) {
    drops[k].display();
  }

  if(frameCount % 100 === 0) {
    thunder.display();
  }

  umbrella.display();
  
  // drop.display();
  drawSprites();
}