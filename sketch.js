var dog, happyDog, database, foodS, foodStock;
var dogIMG, happyDogIMG;


function preload()
{
	dogIMG=loadImage("Dog.png")
	happyDogIMG=loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();


  dog=createSprite(200,200);
  dog.addImage(dogIMG)
  dog.scale=0.1;


  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  
}


function draw() {  
   background(46,139,87)


   if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDogIMG);
   }
  

   textSize()


  textSize(16);
  fill("black");
  text(" Note: Press UP_ARROW key to feed dog milk!", 100,400);

  drawSprites();
  

}



//function to read values from DB
function readStock(data){
    foodS=data.val();
}



//function to write value in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }  

  database.ref('/').update({
    food:x
  })
}
