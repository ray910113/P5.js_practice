
function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0, 1);

  //Step 1A: Move the origin point to the center of the canvas
  translate(width/2,height/2);

  //Step 2: make the canvas slowly rotate
  //Why should we rotate() here? If you don't know, ask your tutor.
  rotate(frameCount*0.5);
  let translateX = sin(frameCount) * 50;
  //Step 1B: calculate translateY so that it follows an elliptical pattern
  let translateY = cos(frameCount) * 150; 

  translate(translateX, translateY);
  noStroke();
  fill(255);
  ellipse(0, 0, 5);

  //Step 3: add another dot orbiting the first dot
  rotate(frameCount);
  fill('red');
  ellipse(5,0,5);
}
