let bellY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255, 200, 0);
  bell(width/2, (height/3)*2, 1);
}

function bell(x, y, size) {
  push();
  rectMode(CENTER);
  strokeWeight(8);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  translate(x, y);
  scale(size);
  fill(255);
  
  
  if(mouseIsPressed == true){
    bellY = 10;
  }else {
    bellY= 0;
  }
  line(0,-100+bellY , 0, -120+bellY);
  arc(0, -120+bellY, 50, 50, PI, TAU,CHORD);
  
  // Bell body
  arc(0, 0, 200, 200, PI, TAU,CHORD);
  arc(0, 0, 165, 165, PI+0.2, PI+0.85);
  arc(0, 0, 165, 165, PI+1.05, PI+1.2);

  // Base of bell
  rect(0, 10, 210,20);

  // The bell head (this is what we want to move when clicked!)

  pop();
}

