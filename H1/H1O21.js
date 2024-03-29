var x = 120;
var speed = 5;
var diameter = 200;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  noStroke();
  rect(0,0,width,40);
  fill('black');  
  text("De bol beweegt heen en weer. (Snelheid = " + speed + "). | Klik met je muis!",10,30);
  stroke('white');
  strokeWeight(10);

  if (mouseIsPressed == false) {
    fill('red');
    diameter = 100;
  }
  else {
    if (speed == -5) {fill('dodgerblue');
    } 
    else { fill('green');
    }
    diameter = 200;
  }
  
  if (x > 880 || x < 120) { speed = -1*speed; }

  x += speed;
  ellipse(x,170,diameter);
}