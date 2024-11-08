let star;
let monkey;
let ponies = [];
let tree;
let heart;
let font;
let cat;
let click = true;
let mustache;
let hold = false;
let a = 3;
let b = 244;
let c = 252;

function preload() {
  let button1 = createButton('Draw Star!');
  button1.parent('button1');
  button1.mousePressed(drawStar);
  
  let button2 = createButton('Draw Heart!');
  button2.parent('button1');
  button2.mousePressed(drawHeart);
  
  let button3 = createButton('Draw Pony!');
  button3.parent('button1');
  button3.mousePressed(drawPony);
  
  let button5 = createButton('Change Click!');
  button5.parent('button2');
  button5.mousePressed(toggle);
  
  let button8 = createButton('Change Draw Color!');
  button8.parent('button2');
  button8.mousePressed(changeColor);
  
  let button6 = createButton('Draw Forest!');
  button6.parent('button2');
  button6.mousePressed(drawForest);
  
  let button4 = createButton('New Page!');
  button4.parent('button3');
  button4.mousePressed(clearScreen);
  
  let button7 = createButton('Save Page!');
  button7.parent('button3');
  button7.mousePressed(savePage);
  
  star = loadImage('/assets/star.png');
  monkey = loadImage('/assets/thinkingMonkey-removebg-preview.png');
  tree = loadImage('/assets/tree.png');
  heart = loadImage('/assets/heart.png');
  cat = loadImage('/assets/headphonesCat2.png');
  mustache = loadImage('/assets/mustache.png');
  
  ponies[0] = loadImage('/assets/twilight.png');
  ponies[1] = loadImage('/assets/appleJack.png');
  ponies[2] = loadImage('/assets/fluttershy.png');
  ponies[3] = loadImage('/assets/pinkiePie.png');
  ponies[4] = loadImage('/assets/rainbowDash.png');
  ponies[5] = loadImage('/assets/rarity2.png');
  ponies[6] = loadImage('/assets/spike2.png');
  
  font = loadFont('/assets/RubikMonoOne-Regular.ttf');
  
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch');
  
  clearScreen();  
}

function draw() {
  //empty
}

function drawStar() {
  image(star, random(0, 350), random(0, 350), 50, 50);
}

function drawHeart() {
  image(heart, random(0, 360), random(0, 360), 40, 40);
}

function drawPony() {
  let rand = int(random(0, ponies.length));
  image(ponies[rand], random(0, 350), random(0, 340), 50, 60);
}

function toggle() {
  if (click == true) {
    click = false;
  } else if (click == false) {
    click  = true;
  }
}

function drawForest() {
  let rand = int(random(0, 350));
  for (let i = 0; i < 8; i++) {
    image(tree, i * 50, rand, 50, 80);
  }
}

function mousePressed() {
  if ((mouseX >= 0) && (mouseX <= 400) && (mouseY >= 0) && (mouseY <= 400)) {
    if (hold == true) {
      image(mustache, mouseX - 20, mouseY - 15, 40, 40);
    } else if (click == true) {
      image(monkey, mouseX - 30, mouseY - 30, 60, 60);
    } else if (click == false){
      image(cat, mouseX - 25, mouseY - 40, 50, 80);
    }
  }
}

function keyPressed() {
  if (keyCode === SHIFT) {
    hold = true;
  }
}

function keyReleased() {
  if (keyCode === SHIFT) {
    hold = false;
  }
}

function clearScreen() {
  background(184, 211, 230);
  
  strokeWeight(5);
  fill(252, 186, 3);
  rect(40, 48, 320, 40);
  
  fill(0);
  textSize(20);
  textFont(font);
  text('Your Sticker Book!', 50, 75);
}

function savePage() {
  saveCanvas('myStickerPage.jpg');
}

function mouseDragged() {
  stroke(a, b, c);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
}

function changeColor() {
  a = random(256);
  b = random(256);
  c = random(256);
}