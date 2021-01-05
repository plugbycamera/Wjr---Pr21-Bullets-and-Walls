var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,25);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = "white";
}

function draw() {
  background(0);  
  bullet.velocityX = speed;

    if(isTouching(bullet,wall)===true){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
      if(damage>10){
        bullet.shapeColor = color(255,0,0);
      }
      if(damage<10){
        bullet.shapeColor = color(0,255,0);
      }
    }





  drawSprites();
}

function isTouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
      return true;
  }
  else {
    return false;
    
  }
}