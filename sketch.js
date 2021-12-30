const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var gameState = "a"


function preload() {

 
 next = loadImage("assets/next.png")
 n = loadImage("assets/2022.gif")
 b = loadImage("assets/2.jpg")
 m =loadImage("assets/new.gif")
 card = loadImage("assets/card.jpg")
 click = loadImage("assets/cclick.png");
 final = loadImage("assets/final1.gif");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  num = createInput("");
  num.position(width/2-100,height/2-50)
 
 //button = createButton('submit');
  //button.position(width/2-50,height/2+100)
 // console.log(gameState)
  button = createSprite(width/2-20,height/2+70,50,50);
  button.addImage(click);
  button.setCollider('rectangle',0,0,300,300);
  button.scale = 0.3;
  button.debug = true;

  button2 = createSprite(width/2+80,height/2+150,50,50);
  button2.addImage(next);
  button2.setCollider('rectangle',0,0,300,300);
  button2.scale = 0.3;
  button2.debug = true;

 //ground = Bodies.rectangle(0,height-1,width*2,1,{isStatic:true});
 //World.add(world,ground)
 //tower = Bodies.rectangle(width/2-500,height-400,160,300,{isStatic:true});
 //World.add(world,tower)
 
}

function draw() {
 background(189);
 if(gameState === "a"){
  image(card,0,0,width,height);
  button2.visible = false;
  textSize(30);
  fill("green");
  text("please enter your name",width/2-180,height/2-70);
 }
  
 input = num.value();
 
 if(gameState==="b"){
 image(b,0,0,width,height)
 num.hide();
  button.visible = false;
  button2.visible = true;
   console.log(input);
  textSize(40);
  fill("green");
  text("My Dear"+" "+input,width/2-200,height/2-150);
  textSize(25)
  fill("red")
  text("You make me the happiest person because your",width/2-300,height/2-100)
  text("Friendship is worth a treasure.",width/2-200,height/2-50)
  text("Your very special for me and i will be forever.",width/2-300,height/2)
  text("I wish you lots of happiness,",width/2-200,height/2+50)
  text("joy, and love.",width/2-150,height/2+100);
  text("in this coming year.",width/2-170,height/2+150);

 }
 if(gameState === "c"){
  image(final,0,0,width,height)
  button2.visible = false;
  button.visible = false;
 }
if(mousePressedOver(button)){
  gameState ="b"
}
if(mousePressedOver(button2)){
  gameState ="c"
}

 
  Engine.update(engine);
 drawSprites();
 //rect(ground.position.x,ground.position.y,width*2,1);
 //image(tow_img,tower.position.x,tower.position.y,160,300)
   
}
