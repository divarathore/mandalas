//code inspired by Daniel Shiffman
//based on tutorial: https://www.youtube.com/watch?v=R3C2giDfmO8


let symmetry = 15;
let angle = 360 / symmetry;
let saveButton;
let clearButton;
// let xoff = 0;
let slider;
let eraseButton; 
let eraseMode = false;

function setup() {
	createCanvas(760, 760);
	angleMode(DEGREES);
	background(0);
	saveButton = createButton('save');
	saveButton.mousePressed(saveMandala);
	clearButton = createButton('clear');
	clearButton.mousePressed(clearCanvas);
	colorMode(HSB);
	slider = createSlider(0, 360, 60, 40);
	eraseButton = createButton('erase');
	eraseButton.mousePressed(erasePen);
	// slider.position(10, windowHeight);
	// slider.style('width', '80px');
	
	// translate(width/2, height/2);
	// stroke(255, 0, 0);
	// for (let i = 0; i < symmetry; i++) {
	// 		rotate(angle); // so here we had i * 30 which was going cumulatively as 30 and then 30 x2 which wasnt exactly symmetrical! so we made a varialbe to devide it equally.
	// 		line(0, 0, width, 0);
	// 	}
// so the commented code above is to check the divisions, basically shows the divides in the symmetry!
}

function saveMandala() {
	save('mandala.png')
}

function clearCanvas() {
	background(0);
}

function erasePen() {
	eraseMode = !eraseMode
}

function draw() {
	let val = slider.value();
	// background(val, 100, 100, 1);
	translate(width/2, height/2);

//	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height); //this means its not supposed to draw when i am pressing the mouse outside the canvas but for me it doesnt seem to be working idky...
	let mx = mouseX - width/2;
	let my = mouseY - height/2;
	let pmx = pmouseX - width/2;
	let pmy = pmouseY - height/2;

	if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
			// let hu = noise(xoff) * 255;
			// xoff += 0.1;
			if (eraseMode == true) {
				stroke(0)
			}
			else {
			stroke(val, 100, 100, 0.2); //if i add another value here say ,100 then that is like opacity but then i changes the color mode so that went between 0-1	
			}
			
			let angle = 360 / symmetry;
			for (let i = 0; i < symmetry; i++){
				rotate(angle);
				let d = dist(mx, my, pmx, pmy);
				let sw = map(d, 0, 16, 16, 1); //from 0 as in not moving and up to 20 so inverting that but saying stroke weight must be a min. of 1
				strokeWeight(sw);
				line(mx, my, pmx, pmy);

			}
		}	
}

