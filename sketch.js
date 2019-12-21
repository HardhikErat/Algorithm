var mr, fr;
function setup() {
  createCanvas(400,400);
  mr= createSprite(200,10,50,50);
  fr= createSprite(200,200,30,90);
  mr.debug=true;
  fr.debug=true;
}
function draw() {
  background("black");  
mr.x= mouseX;
mr.y= mouseY;
console.log(mr.x);
console.log(mr.y);
if((mr.x-fr.x < fr.width/2 + mr.width/2) && (mr.y-fr.y < fr.height/2 + mr.height/2) && (fr.x-mr.x < fr.width/2 + mr.width/2) && (fr.y-mr.y < fr.height/2 + mr.height/2))
{
mr.shapeColor="blue";
fr.shapeColor="red";
}
else
{
  mr.shapeColor="green";
  fr.shapeColor="green"; 
}
  drawSprites();
}