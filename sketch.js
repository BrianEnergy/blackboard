
var colors = ["orange", "blue", "green", "white", "red", "yellow", "black"]; //array of colors
var colorIndex = 0; //color index number
var colorWeight = 4; //line weight

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("black");
}

function draw() {
	strokeWeight(colorWeight);
	stroke(colors[colorIndex]);
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			line(mouseX, mouseY, pmouseX, pmouseY);
		} 
	} 
}

function mousePressed() {
	if (mouseButton === RIGHT) {
		if (colorIndex + 1 < colors.length - 1) {
			colorIndex++;
		} else {
			colorIndex = 0;
		}
	}
}

function keyPressed() {
	//LINE SIZE------------------------------
	if (keyCode === 49) {
		colorWeight = 2;
	} else if (keyCode === 50) {
		colorWeight = 4;
	} else if (keyCode === 51) {
		colorWeight = 6;
	} else if (keyCode === 52) {
		colorWeight = 8;
	} else if (keyCode === 53) {
		colorWeight = 10;
	} else if (keyCode === 54) {
		colorWeight = 12;
	} else if (keyCode === 55) {
		colorWeight = 14;
	} else if (keyCode === 56) {
		colorWeight = 16;
	} else if (keyCode === 57) {
		colorWeight = 18;
	} else if (keyCode === 48) {
		colorWeight = 50;
	}
	//END LINE SIZE--------------------------
	//LINE COLOR-----------------------------
	if (keyCode === 79) {
		colorIndex = colors.indexOf("orange");
	} else if (keyCode === 66) {
		colorIndex = colors.indexOf("blue");
	} else if (keyCode === 71) {
		colorIndex = colors.indexOf("green");
	} else if (keyCode === 87) {
		colorIndex = colors.indexOf("white");
	} else if (keyCode === 82) {
		colorIndex = colors.indexOf("red");
	} else if (keyCode === 89) {
		colorIndex = colors.indexOf("yellow");
	} else if (keyCode === 66) {
		colorIndex = colors.indexOf("blue");
	} else if (keyCode === 32) {
		colorIndex = colors.indexOf("black");
	}
	//END LINE COLOR-------------------------
	//SCREENSHOT-----------------------------
	if (keyCode === 13) {
		saveCanvas('myCanvas', 'png');
	}
	//END SCREENSHOT-------------------------

}

