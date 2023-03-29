let sketchWidth = ((window.innerWidth-20) / 3);
let sketchHeight = window.innerHeight - 100;

let c = 7;
let phrase = "what if I chose differently?";


// haven't figured out how to reuse this code so copied 3 times, only variation is the angle
const s1 = ( sketch ) => {
  var n = 0;
  var i = 0;

  var seeds = [];

  sketch.setup = function() {
    sketch.createCanvas(sketchWidth, sketchHeight); 
    //sketch.angleMode(RADIANS);
    sketch.background(0);
    sketch.frameRate(10);
    sketch.textFont("Courier New"); 
  };

  sketch.draw = function() {
    sketch.translate(sketch.width / 2, sketch.height / 2); 
  
    var angle = n * 137.3; // position around circle
    var radius = c * Math.sqrt(n); // how far from center

    // get start x and y pos from angle and radius
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    
    
    sketch.fill('white');
    sketch.noStroke();
    
    let subphrase = phrase.substring(0,Math.round(i));
    
    sketch.textSize(10);
    
    //rotate(PI);
    sketch.translate(x, y);
    sketch.rotate(angle);
    sketch.text(subphrase, 0, 0);
    
    i+=0.1;
   
    n+=1;
  };
};


const s2 = ( sketch ) => {
  var n = 0;
  var i = 0;

  var seeds = [];

  sketch.setup = function() {
    sketch.createCanvas(sketchWidth, sketchHeight); 
    //sketch.angleMode(RADIANS);
    sketch.background(0);
    sketch.frameRate(10);
    sketch.textFont("Courier New"); 
  };

  sketch.draw = function() {
    sketch.translate(sketch.width / 2, sketch.height / 2); 
  
    var angle = n * 137.5; // position around circle
    var radius = c * Math.sqrt(n); // how far from center

    // get start x and y pos from angle and radius
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    
    
    sketch.fill('white');
    sketch.noStroke();
    
    let subphrase = phrase.substring(0,Math.round(i));
    
    sketch.textSize(10);
    
    //rotate(PI);
    sketch.translate(x, y);
    sketch.rotate(angle);
    sketch.text(subphrase, 0, 0);
    
    i+=0.1;
   
    n+=1;
  };
};

const s3 = ( sketch ) => {
  var n = 0;
  var i = 0;

  var seeds = [];

  sketch.setup = function() {
    sketch.createCanvas(sketchWidth, sketchHeight); 
    //sketch.angleMode(RADIANS);
    sketch.background(0);
    sketch.frameRate(10);
    sketch.textFont("Courier New"); 
  };

  sketch.draw = function() {
    sketch.translate(sketch.width / 2, sketch.height / 2); 
  
    var angle = n * 137.7; // position around circle
    var radius = c * Math.sqrt(n); // how far from center

    // get start x and y pos from angle and radius
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    
    
    sketch.fill('white');
    sketch.noStroke();
    
    let subphrase = phrase.substring(0,Math.round(i));
    
    sketch.textSize(10);
    
    //rotate(PI);
    sketch.translate(x, y);
    sketch.rotate(angle);
    sketch.text(subphrase, 0, 0);
    
    i+=0.1;
   
    n+=1;
  };
};

let sketch1 = new p5(s1, document.getElementById('sketch1'));
let sketch2 = new p5(s2, document.getElementById('sketch2'));
let sketch3 = new p5(s3, document.getElementById('sketch3'));
sketch1.id("sketch1");

let paused = false;

function pauseSketches() {
  let btn = document.getElementById("pauseBtn")
  if (paused) {
    sketch1.loop();
    sketch2.loop();
    sketch3.loop();
    btn.innerHTML = "pause sketch";
  } else {
    sketch1.noLoop();
    sketch2.noLoop();
    sketch3.noLoop();  
    btn.innerHTML = "play sketch";
  }

  paused = !paused;
}


