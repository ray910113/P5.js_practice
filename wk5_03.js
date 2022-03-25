let x = 0; //This variable should get you started with Step 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); //comment this out if you prefer radians.
}

function draw() {
  background(225);
  //call the bauhausHead() here
  
  bauhausHead(x%width , height*0.66 , frameCount*0.5 , .5);
  
  bauhausHead(x%width , height*0.33 , frameCount*2 , 1);
  
  bauhausHead(x%width , height*0.5 , frameCount*3 , .25);

  x++;
}

function bauhausHead(xPos, yPos, rotation, ratio) {
  push();

  //Step 1: use xPos and yPos to make it move.
  translate(xPos,yPos);
  //Step 2: use rotation to make it spin.
  //Don't forget about angleMode()
  rotate(rotation);
  //Step 3: use ratio to make it grow
  scale(ratio*frameCount*  0.006);

  // Circular outline
  fill(245);
  strokeWeight(2);
  ellipse(0, 0, 98);

  // Style for head
  strokeWeight(0.5);
  fill(20);
  stroke(20);

  // Eye
  rect(-20, -22, 10, 10);
  line(-20, -22, -25, -22);
  line(-10, -12, -10, -7);

  rect(10, -47, 1, 60);
  line(10, 13, 0, 13);

  rect(3, 20.5, 5, 1);
  rect(8, 13, 2, 15);

  // Chin
  rect(1, 28, 7, 20);
  line(1, 28, -5, 28);

  pop();
}
