/* VARIABLES */
let font;
let catcher, fallingObject;
let backgroundImg, catcherImg, fallingObjectImg;
let fallingObjectText = ["Optimism", "Gratefulness", "Perseverance", "Self\nCare", "Desire", "Determination", "Motivation"];
let score = 0;
let score2 = 0;
let score3 = 0;
let walls, paddle, ball, bricks, hasStarted;
let player, ground, bird, platforms, flowers;



/* PRELOAD LOADS FILES */
function preload(){
  font = loadFont("assets/gameFont.ttf");
  catcherImg = loadImage("assets/techWoman.png");
  fallingObjectImg = loadImage("assets/shield.png");
  bird = loadImage('assets/bird.png');
  blossom = loadImage("assets/blossom.png");
  cherry  = loadImage("assets/cherryBlossom.png");
  tulip  = loadImage("assets/tulip.png");
  butterfly =  loadImage("assets/butterfly.png");
  hibiscus = loadImage("assets/hibiscus.png");
  sunrise = loadImage("assets/sunrise.jpg");
  hope =  loadImage("assets/HOpe.png");
  hope2 = loadImage("assets/HOpe (1).png");
  hope3 = loadImage("assets/HOpe (2).png");
}

/* SETUP RUNS ONCE */
function setup() {
  
  createCanvas(400, 400);
  textSize(20);
  textAlign(CENTER);
  textFont(font);
  noStroke();
  background(hope3);
  homeScreen();
 
  
  catcherImg.resize(100, 0);
  fallingObjectImg.resize(70, 0);
  bird.resize(70, 0);
  butterfly.resize(80, 0);
  blossom.resize(35, 0);
  tulip.resize(35, 0);
  hibiscus.resize(35, 0);
  cherry.resize(35, 0);

  
  

  
  
  
}

/* DRAW LOOP REPEATS */
function draw() {
  if (enterButton.mouse.presses()) {
      //screen 1 is directions screen
      screen = 1;
      showScreen1(); 
  } 
  if (screen==1){
    
    if (firstButton.mouse.presses()) {
      //screen 2 is play screen 
      background(hope2);
      screen = 2;
      if(screen==2)
      {
        showScreen2();
      }
      
    }
    if (secondButton.mouse.presses()) {
      //screen 3 is play screen 
      screen = 3;
      if(screen==3)
      {
        showScreen3();
      }
      
    }
    if (thirdButton.mouse.presses()) {
      //screen 4 is play screen 
      screen = 4;
      if(screen==4)
      {
        showScreen4();
      }
      
    }
  }
  
if (screen == 2){
  background("#D6EDFF");
  textSize(10);
   textAlign(LEFT);
  text('Collect the strengths you need to win by using\nthe arrow keys! A point will be deducted every\ntime you miss a strength.', 12, 50);
   //If fallingObject reaches bottom, move back to random position at top
  if (fallingObject.y >= height)
  {
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    fallingObject.text = random(fallingObjectText);

    score = score - 1;
  }
  //Move catcher
  if (kb.pressing("left"))
  {
    catcher.vel.x = -3;
  }
  else if (kb.pressing("right"))
  {
    catcher.vel.x = 3;
  }
  else
  {
    catcher.vel.x = 0;
  }
  //Stop catcher at edges of screen
  if (catcher.x < 50)
  {
    catcher.x = 50;
  }
  else if (catcher.x > 350)
  {
    catcher.x = 350;
  }
  //If fallingObject collides with catcher, move back to random position at top
  if (fallingObject.collides(catcher))
  {
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    fallingObject.direction = "down";
    fallingObject.text = random(fallingObjectText);
    score = score + 1;
  }
  //Text that displays the score
  fill(0);
  textSize(20);
   textAlign(CENTER);
  text("Score = " + score, 60, 30);

  //Win - Spicy
  if (score == 10)
  {
    showScreen5();
  }
}

 if (screen == 3){
  background('#3B1637');
  textSize(10);
   textAlign(LEFT);
  text('Get rid of all the blocks by using your mouse to catch the ball.\nTo restart, click anywhere on the screen', 25, 45);
   textAlign(CENTER);
   textSize(20);
   text("Destroy fear!!",200,380);
	paddle.moveTowards(mouse.x, height - 50, 1);

	if (mouse.presses()) {
		// start or restart the game
		bricks.remove();
    score2 = 0;
		new Tiles(
			[
				"==.==..=..=.=",
				"=..=..=.=.==",
        "=..=..=.=.=",
        "==.==.===.=",
				"=..=..=.=.=",
        "=..=..=.=.=",
        "=..==.=.=.=",
				
			],
			60,
			80,
			bricks.w + 3,
			bricks.h + 3
		);

		ball.x = width / 2;
		ball.y = height - 200;
		ball.direction = 90 + random(-10, 10);
		ball.speed = 5;

		hasStarted = true;
	}

  //When ball and paddle collides move  ball in random direction
  if (ball.collides(paddle)) {
    ball.speed = 5;
    ball.direction = ball.direction + random(-10, 10);
   
  }
  
   
    //Text that displays the score
  fill('#f5ebfc');
  textAlign(CENTER);
  text("Score = " + score2, 70, 30);

  //Win - Spicy
  if (score2 == 42)
  {
    showScreen5();
  }
   
}
  
  if(screen == 4)
  {
    background('#E4F5FF');
  
  //Draw instructions and score to screen
  fill(0);
  textAlign(LEFT);
  textSize(20);
  text('Flowers = ' + score3, 10, 60);
  textSize(10);
  text('Use the arrow keys to collect all 12 flowers!\n **Avoid the obstacles!', 10, 20);

  //Move the player
  if (kb.presses("up")) {
    player.vel.y = -6;
  }

  if (kb.pressing("left")) {
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
  } else {
    player.vel.x = 0;
  }

  //Stop player from moving outside of screen
  if (player.x < 20) {
    player.x = 20;
  }
  
  if (player.x > 900) {
    player.x = 900;
  }
  
  if (player.y < 20){
    player.y = 20;
  }

  //Move bird
  if (bird.y < 150) {
    bird.vel.y = 2;
  } else if (bird.y > 350) {
    bird.vel.y = -2;
  }

  //Collide with bird and restart
  if (player.collides(bird)) {
    reset();
  }

  //Collect flowers and win
  if (score3 == 12) {
    showScreen5();
  }

  //Set camera to follow player
  camera.x = player.x + 102;
  ground.x = camera.x; 
}

}
 

/* FUNCTIONS */
function showScreen1(){
  background(hope2);
  moveOff();
  
  textSize(25);
  fill("#E1F4E4");
  
  

  // Add SKILL button
  firstButton.pos = {x: width/2 , y: height/2 };
  firstButton.w = 120;
  firstButton.h = 40;
  firstButton.collider = 'k';
  firstButton.color = "#E1F4E4";
  firstButton.text = "Skill";
  // Add CONFIDENCE button
  secondButton.pos = {x: width/2 , y:height/2 + 50};
  secondButton.w = 120;
  secondButton.h = 40;
  secondButton.collider = 'k';
  secondButton.color = "#E1F4E4";
  secondButton.text = "Confidence";
  //Add BRAVERY Button
  thirdButton.pos = {x: width/2 , y: height/2 + 100};
  thirdButton.w = 120;
  thirdButton.h = 40;
  thirdButton.collider = 'k';
  thirdButton.color = "#E1F4E4";
  thirdButton.text = "Bravery";
  
}

function showScreen2(){
  moveOff();
  moveOffScreen();
  textSize(12);
   fill('#E2E6F3');
  text("Move the\ncatcher with the\nleft and right\narrow keys to\ncatch the falling\nobjects.", width-70, 20);
  //Create catcher 
  catcher = new Sprite(catcherImg,200, 350, 'k');
  catcher.color = color(95,158,160);

  //Create falling object
  fallingObject = new Sprite (fallingObjectImg,100,0);
  fallingObject.color = color(0,128,128);
  fallingObject.velocity.y = 2;
  fallingObject.rotationLock = true; 
  fallingObject.text = random(fallingObjectText);
}
  
function showScreen3(){
  //background('#fad3bb');
  moveOff();
  moveOffScreen();
   
  allSprites.collider = "s";
	allSprites.color = color('#f5ebfc');

  //Create walls group at the top, left, and right of the screen
	walls = new Group();
	walls.w = 30;
	walls.h = 800;

  //Top wall
	let wallTop = new walls.Sprite(width / 2, -20);
	wallTop.rotation = 90;

	//Left and right walls
	new walls.Sprite(0, height / 2);
	new walls.Sprite(width, height / 2);

  //Create ball
	ball = new Sprite(width / 2, height - 200, 11, 'd');
	ball.bounciness = 1;
	ball.friction = 0;

  //Create paddle
	paddle = new Sprite(width / 2, height - 50, 100, 20, 'd');
	paddle.rotationLock = true;

  //Create bricks group
	bricks = new Group();
	bricks.tile = "=";
	bricks.w = 20;
	bricks.h = 10;

  //The notation in the next few lines is called an arrow function 
	ball.collide(bricks, (ball, brick) => {
		brick.remove();
    score2 = score2 + 1;
	});
	
}

function showScreen4(){
  //background('#fad3bb');
  moveOff();
  moveOffScreen();
  world.gravity.y = 10;

  //Resize image
  
  //Create player
  player = new Sprite(butterfly,50, 250);
  player.rotationLock = true;
  player.vel.x = 0;
  player.vel.y = 0;

  //Create ground
  ground = new Sprite(150, 380, 600, 40, "s");
  ground.color = color('#1A744F');
  ground.friction = 0;

  //Create monster
  bird = new Sprite(bird,750, 149, "k");
  bird.friction = 0;

  //Create platforms group
  platforms = new Group();
  platforms.color = "#F5DAFF";
  platforms.collider = "s";
  platforms.friction = 0;

  //Create flowers group
  flowers = new Group();
  flowers.collider = "k";

  //Overlaps method takes in a Sprite or group name (flowers), then calls a function (collect)
  player.overlaps(flowers, collect);

  //Load starting screen
  loadStartScreen();
}

function showScreen5(){
  background(hope);
  moveOff();
  moveOffScreen();
  endingScreen();
}
//Moves buttons off screen
function moveOffScreen(){
  firstButton.pos = {x:-120, y: -120};
  secondButton.pos = {x: -140, y:-140};
  thirdButton.pos = {x:-100, y: -100};
}
function moveOff(){
  enterButton.pos = {x:-20, y: -20};
  insButton.pos = {x:-155, y: -155};
}

function moveOffScreenCollection(){
  catcher.pos = {x:-130, y: -130};
  fallingObject.pos = {x: -150, y:-150};
  
}
function homeScreen()
{
  textSize(15);
  enterButton = new Sprite(width/2,height/2+100);
  firstButton = new Sprite(-200,-200);
  secondButton = new Sprite(-50,-50);
  thirdButton = new Sprite(-100,-100);

  textSize(10);
  insButton = new Sprite(width / 2,
    height/2 + 5);
  //Text for first screen
  
  textSize(10);
  insButton.w = 300;
  insButton.h = 20;
  insButton.collider = 'k';
  insButton.color = "#FFEDD6";
  insButton.text = "Keep your hopes up with one of these mini-games";
 
  textSize(20);
  // Display enter button
  enterButton.w = 150;
  enterButton.h = 30;
  enterButton.collider = 'k';
  enterButton.color = "#fcf4bd";
  enterButton.text = "Let's get started!!";

}
function endingScreen(){
  //Move off of screen
  catcher.pos = { x: 600, y: -300 };
  fallingObject.pos = { x: -100, y: 0 };
}

//Functions for platform game!!!!!!!!!!!!!!
function loadStartScreen() {
  platforms.removeAll();
  flowers.removeAll();

  //Move player to starting position
  player.x = 50;

  //Create two platforms
  new platforms.Sprite(110, 310, 50, 100);
  new platforms.Sprite(260, 200, 150, 30);

  //Create 12 flowers
  new flowers.Sprite(cherry,220, 170, 15);
  new flowers.Sprite(cherry,260, 170, 15);
  new flowers.Sprite(cherry,300, 170, 15);
  new flowers.Sprite(blossom,220,345,15);
  new flowers.Sprite(blossom,260,345,15);
  new flowers.Sprite(blossom,300,345,15);
  new flowers.Sprite(tulip,600, 340, 15);
  new flowers.Sprite(tulip,640, 340, 15);
  new flowers.Sprite(tulip,680, 340, 15);
  new flowers.Sprite(hibiscus,810, 340, 15);
  new flowers.Sprite(hibiscus,850, 340, 15);
  new flowers.Sprite(hibiscus,890, 340, 15);
}

function reset() {
  score3 = 0;
  loadStartScreen();
}

//This function uses parameters 
function collect(player, flower) {
  flower.remove();
  score3 = score3 + 1;
}


