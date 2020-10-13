// costanti sfondo
let b1;
let b2;

//colorPalette texture
const colorPalette = ["#FC9F66","#FAC375","#FAE39C"]; //colorPalette ARANCIO
const colorPalette2 = ["WHITE","GRAY","BLACK"]; //colorPalette B&N

//costanti texture
const a = 100;
const b = 50;
const c = 25;
const d = c/2;



function setup() {
  createCanvas(windowWidth,windowHeight)
  strokeWeight(5);
  frameRate(5);

//definizioni costanti sfondo
  b1 = color("#8bb8d8");
  b2 = color("#1e3258");
}

function draw() {

  //definizione lerpColor sfondo
let m = map(mouseX, 0, width, 0, 0.8);
let n = lerpColor(b1, b2, m);
background(n);

if(mouseIsPressed){
  background(color(random(colorPalette2)));
}

//definizione costanti texture
for(let x = a; x <= width; x += a * 1.5){
  for(let y = a; y <= height; y += a * 1.5){

    if(mouseX < windowWidth/2){
      stroke(color(random(colorPalette)));
      noFill();
    }  else {
      fill(color(random(colorPalette)));
      noStroke();
    }

    if(mouseIsPressed){
      fill(color(random(colorPalette2)));
      stroke(color(random(colorPalette2)));
    }

    rect(x, y, a, b, c, c, b);

    }
  }

  //definizione costanti texture piccola
  for(let x = b; x <= width; x += b * 3){
    for(let y = b; y <= height; y += b * 3){

      if(mouseX < windowWidth/2){
        fill(color(random(colorPalette)));
        noStroke();
      }  else {
        stroke(color(random(colorPalette)));
        noFill();
      }

      if(mouseIsPressed){
        fill(color(random(colorPalette2)));
        stroke(color(random(colorPalette2)));
      }

      rect(x, y, b, c, d, d, c);

      }
    }

//testo cursore
noStroke();
textFont("Helvetica");
fill("WHITE");
textSize(20);
text("slide from left to right or click to change color", mouseX, mouseY);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
