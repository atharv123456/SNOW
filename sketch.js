const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var cat,catImage;
var sound;

var bg,bgImg;

var snow=[];

function preload(){
bgImg=loadImage("snow1.jpg");
catImage=loadAnimation("cat2.png","cat3.png");
sound=loadSound("sound/JoyMusic.mp3")
}




function setup() {
   createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
 
  sound.play();

  cat=createSprite(470,500,20,20);
  cat.addAnimation("catstanding",catImage);
  cat.scale=0.2;


  

  if(frameCount%50===0){
  //create snowfall objects
  for (var e = 0; e<200 ; e++)
  {
    snow.push(new snowfall(random(0,800),random(0,800)));
  }
  }




  
   }

function draw() {

  background(bgImg);
  textSize(20);
  fill("black");
  text("Press Space Key To Reset The Cat",400,50);


  cat.velocityX=-30;



  


  Engine.update(engine);

  for(var i=0;i<200;i++){
  snow[i].display();
  snow[i].updateY();



  
  
  drawSprites(); 
  
  }

}

function keyPressed(){
if(keyCode===32){
cat.x=470;
cat.y=500;
}
}
