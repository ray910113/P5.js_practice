let xPos = [];
let yPos = [];
let col = [];

function setup(){
  createCanvas(windowWidth , windowHeight);
  colorMode(HSB);
  noStroke();
  for(let i = 0; i < 500; i++){
    xPos[i] = random(width);
    yPos[i] = random(height);
    col[i] = color(random(360),100,100);
  }
  
}

function draw(){
  background(220);
  for(let i=0; i< xPos.length; i++){
    xPos[i] = xPos[i] + random(-2,2);
    yPos[i] = yPos[i] + random(-2,2);
    
    fill(col[i]);
    ellipse(xPos[i], yPos[i], 25);
  }
  
}



