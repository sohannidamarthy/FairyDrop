Play=0;
End=1;
gameState=Play;
var d;


var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
	
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x=starBody.position.x
  star.y=starBody.position.y
  if(gameState===Play){
	keyPressed();
	touchHand();
	if(star.y>470){
		gameState=End
	}  
  }
  if(gameState===End){
	  d=star.x-(fairy.x+120)
	  textSize(15)
	  text("You were " + d +" away from the Fairy's hand", 300,300)
	  if(d <=10 && d >= -10){
		  textSize(20);
		  text("Good Job" ,300,400)
	  }
	  else {
		  text("Try again Next Time",300,400)

	  }

  }
  
  
  
  

  drawSprites();

}

function keyPressed() {
	if(keyCode===DOWN_ARROW){
		
		Matter.Body.setStatic(starBody, false)
	}
	if(keyCode===RIGHT_ARROW){
		fairy.velocityX=5

	}
	if(keyCode===LEFT_ARROW){
		fairy.velocityX=-5
	}
	if(keyCode===32){
		fairy.velocityX=0
	}

}
function touchHand(){
	if(star.y > 470 ){
		Matter.Body.setStatic(starBody, true)
	    


	}
}

//510
//120