var dog, happyDog, database, foodS;

function preload(){
  dog = loadImage("images/dog.png");
  happydog = loadImage("image/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  var database = firebase.database();
  var foodstock =  database.ref("food");
  foodstock.on("value",readstock)
}


function draw() {  

  drawSprites();
  //add styles here

}



