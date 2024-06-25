function setup() {
  createCanvas(1000, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  rotateX(60);
  noFill();
  stroke(255);
  
  for (let i = 0; i < 30; i++){
    let r = map(sin(frameCount /2), -1, 1, 0, 200);
    let g = map(i,0,50,100,200);
    let b = map(cos(frameCount), -1, 1, 200, 100);
    stroke(r,g,b);
    
    beginShape()
      for (let j = 0; j < 360; j+=10){
        let rad = i * 10;
        let x = rad * cos(j);
        let y = rad * sin(j);
        let z = sin(frameCount * 20 + i * 16)*30
        vertex(x,y,z);
      }
    endShape(CLOSE);
      }
    
      for (let t = 0; t < 30; t++){
    let r = map(sin(frameCount /2), -1, 1, 0, 255);
    let g = map(t,0,50,100,200);
    let b = map(cos(frameCount), -1, 1, 200, 100);
    stroke(r,g,b);
    
    beginShape()
      for (let k = 0; k < 360; k+=10){
        let rad = t * 10;
        let x = rad * cos(k);
        let y = rad * sin(k);
        let z = sin(frameCount * 15 + t * 16)*29
        vertex(x,y,z);
      }
    endShape(CLOSE);
  }
}