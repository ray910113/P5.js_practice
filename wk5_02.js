function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0,1);
  
}

function draw() {
  translate(random(width), 
random(height));
  smiley();
}

function smiley(){
  fill('yellow');
  strokeWeight(3);
  ellipse(0,0,40);
  fill('black');
  noStroke();
  ellipse(-7,-6,10);
  ellipse(7,-6,10);
  noFill();
  stroke('black');
  strokeWeight(5);
  angleMode(DEGREES);
  arc(0,1,20,20,30, 150);
}
