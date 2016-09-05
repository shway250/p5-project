var snow;  // Declare object

function setup() {
  createCanvas(710, 400);
  // Create object
  snow = new Jitter();
}

function draw() {
  background(255);
  snow.move();
  snow.display();
}

// // Jitter class
// function Jitter() {
//   this.x = random(width);
//   this.y = random(height);
//   this.diameter = random(10, 30);
//   this.speed = 1;


//   this.move = function() {
//     this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);
//   };

//   this.display = function() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
// };

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;
  //rgb values
  this.r = random(0,100);
  this.g = random(0,100);
  this.b = random(0,255);

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    stroke(255);
    strokeWeight(0);
    fill(this.r,this.g,this.b);
    //making shape
    ellipse(this.x, this.y, this.diameter, this.diameter);
    rect(20,30,2,20);
  }
};