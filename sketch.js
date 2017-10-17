function setup() {
  createCanvas(500,500);
  for(var x = 25; x < 500; x += 10) {
    for(var y = 25; y < 500; y += 10) {
      noStroke();
      rect(x,y,random(height),random(5));
      ellipse(x,y,random(5));
   
    if(random() >0.5)
{
   fill(255,0,0);
} else {
   fill(255,255,255);
   
   
}
  }
  
  }}