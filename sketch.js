/**
 * Omar Cobas and Ben Kessler
 * 11/3/17
 * Make a Pollock! 
 * Program Description: This program lets you draw whatever you want and save it.
 *As soon as you click you mouse on the canvas, a black line automatically appears
 *as you draw with the mouse, the faster you draw, the larger the line becomes.
 *If you let go, the line resets to it original small size. By pressing the number keys: 1-5
 *you are able to change the color of line. If you press the R key, the entire canvas
 *resets to a blank state. If you use the e key, you can erase whatever part of the canvas you want 
 *to. Finally, the p key when pressed let save your current work as a png file to you computer. 
*/
function setup() { 
  createCanvas(400, 400);
  frameRate(60);
  background(255,255,255);
  fill(0,0,0);
} 
//Variables
var mouseIsPressed;
var keyCode;
var xSize = 10;
var ySize = 10;
//Draw Function
function draw() {
noStroke();
  //when dist. between current and previous pos. of mouse greater than 5
	if ((mouseX-pmouseX>5)) {
    xSize += 1;
    ySize += 1;
} 

//ellipse(mouseX, mouseY, 50, 50)
if (mouseIsPressed) {
	 ellipse(mouseX, mouseY, xSize, ySize);
}

}

function keyPressed() {
//1 key, change drawing stroke to black
  if (keyCode == 49){
  	fill(0,0,0); 

}
//2 key, change drawing stroke to bright orange
  else if (keyCode == 50) {
  	fill(400,100,23, 85);
  
}
  //3 key, change drawing stroke to bright green
  else if (keyCode == 51) {
  	fill(100,243,34, 85);
   
} 
  //4 key, change drawing stroke to dark blue
  else if (keyCode == 52) {
  	fill(23,54,180,85);

}
  //5 key, change drawing stroke to light violet
  else if (keyCode == 53) { //5 key
  	fill(187,53,231, 85);
  
} 
  //6 key, change drawing stroke to light blue
  else if (keyCode == 54) { 
  	fill(0,0,255, 85);
  
} 
  //Reset Entire Canvas, Press R Key
  else if (keyCode == 82) {
  	background(255,255,255);
    xSize = 20;
    ySize = 20;
} 
  //Use Eraser, Press E Key
  else if (keyCode == 69) {
  fill(255,255,255);
  
  }
	//Save picture of canvas to Computer functionality 
	else if (keyCode == 80) {
		saveCanvas(['png'], ['Pollack'])
	}
							 

}
function mouseReleased() {
//When mouse not pressed reset ellipse size
if (mouseIsPressed != true) {
  xSize = 10;
  ySize = 10;
  ellipse(mouseX, mouseY, xSize, ySize);
  }
  
}
	



    
  


  
