let leftscore =0;
let rightscore = 0;
function setup(){
	createCanvas(600,600);
	left = new Paddle(true);
	right = new Paddle(false);
	puck = new Puck();
}
function draw(){
	background(100,98,87);
	puck.checkPaddleRight(right);
puck.checkPaddleLeft(left);
	left.show();
	right.show();
    left.update();
    right.update();
    puck.update();
    puck.show();
    puck.edges();
    fill(255);
    textSize(32);
    text(leftscore,32,40);
    text(rightscore,width-64,40);
}
function keyReleased(){
	left.move(0);
	right.move(0);
}
function keyPressed(){
	console.log(key);
	if(key =='ArrowUp'){
		left.move(-10);
	}
	else if(key =='ArrowDown'){
		left.move(10);
	}
	 if(key =='ArrowRight'){
		right.move(-10);
	}
	else if(key =='ArrowLeft'){
		right.move(10);
	}
}