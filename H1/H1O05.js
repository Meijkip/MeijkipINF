function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {

  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  
  translate(90,-10);

  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);

  fill('gray');
  triangle(100,280,200,280,150,200);
  noStroke();
  rect(120,330,30,50);
  translate(-90,10);
  
  fill('khaki');
  ellipse(350,100,150,150);
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320,230,100,150);
}

function draw() {
  noStroke();
  fill('tan');
  translate(25,25);
  rect(0,0,400,400);
  translate(200,50);
  fill('peru');
  rect(0,0,150,150);
 }