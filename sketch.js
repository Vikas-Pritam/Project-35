var ballon,ballonImage1,ballonImage2;
var database;
var local,position;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   ballonImage1=loadAnimation("hotairballon1.png");
   ballonImage2=loadAnimation("hotairballon1.png","hotairballon1.png",
   "hotairballon1.png","hotairballon2.png","hotairballon2.png",
   "hotairballon2.png","hotairballon3.png","hotairballon3.png","hotairballon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  ballon=createSprite(250,450,150,150);
  ballon.addAnimation("hotAirBallon",ballonImage1);
  ballon.scale=0.5;

  textSize(20);
  
  
  local=database.ref('ballon/position');
  local.on("value",readPosition,showError);



  
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    ballon.addAnimation("hotAirBallon",ballonImage2);

    writePosition(-1,0);


    //write code to move air ballon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    ballon.addAnimation("hotAirBallon",ballonImage2);

    writePosition(1,0);

    //write code to move air ballon in right direction
  }
  else if(keyDown(UP_ARROW)){
    ballon.addAnimation("hotAirBallon",ballonImage2);

    writePosition(0,-1);

    //write code to move air ballon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    ballon.addAnimation("hotAirBallon",ballonImage2);

    writePosition(0,1);

    //write code to move air ballon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Ballon!",40,40);
}

function writePosition(x,y){
  database.ref('ballon/position').set({
  x :ballon.x + x,
  y :ballon.y + y
  })
}

function readPosition(data)
{
  position=data.val();
  ballon.x=position.x;
  ballon.y=position.y;
}

function showError()
{

}
