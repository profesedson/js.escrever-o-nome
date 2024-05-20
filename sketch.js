function setup() {
    createCanvas(400, 400);
    background("white")
  }
  
  function draw() 
  {
    stroke("green");
    fill("red");
    
    
    if (mouseIsPressed) 
    {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  