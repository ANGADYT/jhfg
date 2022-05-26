var taxi
var backgroundImage,taxiImage;
var fuelImage,CoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var conis,coinGroup;


function preload() {
  backgroundImage=loadImage("./road.png");
  taxiImage=loadImage("./taxi.png");
  blastImage=loadImage("./blast.png");
  fuelImage=loadImage("./fuel.png");
  coinImage=loadImage("./goldCoin.png");
  lifeImage=loadImage("./life.png");
  obstacle1Image=loadImage("./obstacle1.png");
  obstacle2Image=loadImage("./obstacle2.png");
}

function setup() {
createCanvas(1000,9190);
taxi=createSprite(500,8900);
taxi.addImage(taxiImage)
}

function draw() {
  background(backgroundImage)

  //taxi.x=taxi.x+5

  if(keyDown("SPACE")){
    taxi.velocity.y=-10
  
  }

  if(keyDown("left_arrow")){
    taxi.x = taxi.x +5
  }
  //coinGroup=createGroup();
 
  
  spawnCoins();
  drawSprites();
}


function spawnCoins(){
  if(frameCount % 60 === 0 ){
coin=createSprite(100,100);
coin.addImage(coinImage);
coin.y =Math.round(random(100,100));
coin.x =Math.round(random(100,100));
coin.scale=0.2
  }
}
          