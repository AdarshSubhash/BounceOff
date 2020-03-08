 var fixed;
 var moving;
 function setup() {
  createCanvas(800,400);
 
  
  fixed =createSprite(400, 10, 50, 50);
  moving = createSprite(400,380,70,30);
fixed.shapeColor="white";
moving.shapeColor="white";
fixed.debug=true;
moving.debug=true;
fixed.velocityY=+3;
moving.velocityY=-3;

}

function draw() {
  background(0,0,0);  
 // moving.x=World.mouseX;
  //moving.y=World.mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2
     && fixed.x-moving.x<fixed.width/2+moving.width/2){
       moving.velocityX=moving.velocityX*(-1);
       fixed.veloxityX=fixed.velocityX*(-1);
       moving.shapeColor="red";
       fixed.shapeColor="red";
     }
     if( moving.y-fixed.y<moving.height/2+fixed.height/2
     && fixed.y-moving.y<fixed.height/2+moving.height/2){
      moving.velocityY=moving.velocityY*(-1);
      fixed.veloxityY=fixed.velocityY*(-1);
      moving.shapeColor="red";
      fixed.shapeColor="red";
     }
  drawSprites();
}