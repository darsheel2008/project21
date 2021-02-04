var canvas;
var music;
var surface1,surface2,saurface3,surface4,box,edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

 //create 4 different surfaces
    surface1=createSprite(200,400,10,50);
    surface1.shapeColor=red;

    surface2=createSprite(205,400,10,50);
    surface2.shapeColor=yellow;

    surface3=createSprite(210,400,10,50);
    surface3.shapeColor=purple;

    surface4=createSprite(215,400,10,50);
    surface4.shapeColor=orange;

 //create box sprite and give velocity
    box=createSprite(random(20,750));
    box.velocityX=5;
    box.velocityY=-5;
}

function draw() {
    background("white");
    //create edgeSprite
    edges=createdgeSprite;
    box.bounceoff(edges);

 //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceoff(surface1)){
       box.shapeColor = orange;
       box.velocityX = box.velocityX * (-1);
       box.velocityY = box.velocityY * (-1);
    }

    if(surface2.isTouching(box) && box.bounceoff(surface2)){
      box.shapeColor = purple;
      box.velocityX = box.velocityX * (-1);
      box.velocityY = box.velocityY * (-1);
   }

   if(surface3.isTouching(box) && box.bounceoff(surface3)){
      box.shapeColor = yellow;
      box.velocityX = 0;
      box.velocityY = 0;
      music. stop();
   }

   if(surface4.isTouching(box) && box.bounceoff(surface4)){
      box.shapeColor = red;
      box.velocityX = box.velocityX * (-1);
      box.velocityY = box.velocityY * (-1);
      music. play();
   }
}
