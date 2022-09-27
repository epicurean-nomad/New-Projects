let xparam;
let yparam;
let xspeed = 1000;
let yspeed = 1000;
let radius = 100;
function setup() {
  createCanvas(600,600,WEBGL);
  
  
  
  // radius = createSlider(1,250,200)
  
  xparam = createSlider(1,25,10)
  xparam.position(150,height)
  
  yparam = createSlider(1,25,10)
  yparam.position(150,height + 20)
  
//   xspeed = createSlider(100,1000,1000)
//   xspeed.position(300,height)
  
//   yspeed = createSlider(100,1000,1000)
//   yspeed.position(300,height + 20)
}

function draw() {
  background(220);
  rotateX(millis()/xspeed)
  rotateY(millis()/yspeed)
  sphere(radius,xparam.value(),yparam.value());
}

function keyPressed() {
  
  if (keyCode === 107){//+
    radius += 5;
  }
  
  if (keyCode === 109){//-
    radius -= 5;
  }
  
  if (keyCode === 87) {//W
    xspeed+=500;
  } 
  if (keyCode === 65) {//A
    yspeed -= 500;
  }
  if (keyCode === 83) {//S
    xspeed -= 500;
  }
  if (keyCode === 68) {//D
    yspeed += 500;
  }
}