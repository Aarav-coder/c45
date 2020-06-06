var player;
var gameState = "start";
function setup() {
  createCanvas(displayWidth,displayHeight);
player = createSprite(displayWidth/4,displayHeight/4);
wolf = createSprite(100,displayHeight-100);
lion = createSprite(displayWidth/2,displayHeight/2);
dog = createSprite(displayWidth-100,displayHeight/6);
panther = createSprite(100,displayHeight/10);
dino = createSprite(displayWidth-100,displayHeight-100);

wolf.setVelocity(2,3);
lion.setVelocity(2,3);
dog.setVelocity(2,3);
panther.setVelocity(2,3);
dino.setVelocity(2,3);

leftbutton = createButton('←');
rightbutton = createButton('→');
upbutton = createButton('↑');
downbutton = createButton('↓');
leftbutton.position(50,displayHeight-200);
rightbutton.position(100,displayHeight-200);
upbutton.position(75,displayHeight-225);
downbutton.position(75,displayHeight-175);
wall1 = createSprite(displayWidth/8,displayHeight/40,displayWidth/2,20);
wall2 = createSprite(displayWidth-200,displayHeight/40,displayWidth/2,20);
wall3 = createSprite(displayWidth/2,displayHeight/8,displayWidth/2+200,20);
wall4 = createSprite(displayWidth/8,displayHeight/4,displayWidth/2,20);
wall5 = createSprite(displayWidth-200,displayHeight/4,displayWidth/2,20);
wall6 = createSprite(displayWidth/2,displayHeight/3+30,displayWidth/2+200,20);
wall7 = createSprite(displayWidth/8,displayHeight/3+130,displayWidth/2,20);
wall8 = createSprite(displayWidth-200,displayHeight/3+130,displayWidth/2,20);
wall9 = createSprite(displayWidth/2,displayHeight/2+110,displayWidth/2+200,20);
wall10 = createSprite(displayWidth/2,displayHeight-200,displayWidth/2+200,20);
//wall11 = createSprite(displayWidth/2,displayHeight/8,displayWidth/2+200,20);
wall12 = createSprite(displayWidth/8,displayHeight-50,displayWidth/2,20);
wall13 = createSprite(displayWidth-200,displayHeight-50,displayWidth/2,20);
wall14 = createSprite(10,displayHeight/6,20,displayHeight/3);
wall15 = createSprite(10,displayHeight-150,20,displayHeight/3);
wall16 = createSprite(displayWidth-10,displayHeight/6,20,displayHeight/3);
wall17 = createSprite(displayWidth-10,displayHeight-150,20,displayHeight/3);
}
function draw() {
  background(0); 
  upbutton.mousePressed(()=>{
  player.y = player.y-50;
  })
  downbutton.mousePressed(()=>{
  player.y = player.y+50;
  })
  leftbutton.mousePressed(()=>{
  player.x = player.x-50;
  })
  rightbutton.mousePressed(()=>{
  player.x = player.x+50;
  })
if(player.x<0){
  player.x = displayWidth-player.width;
}
if(player.x>displayWidth){
  player.x = player.width;
}
if(player.y<0){
  player.y = displayHeight-player.height;
}
if(player.y>displayHeight){
  player.y = player.height;
}
player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
//player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);

panther.collide(wall1);
panther.collide(wall2);
panther.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
//player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);

player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
//player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);

player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
//player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);

player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
//player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);

player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
//player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);

if(gameState === "start"){
  text("Avoid Animals Use Tunnels To Collect The Treasure",displayWidth/2,displayHeight/2);
  text("Use Buttons To Move The Player",displayWidth/2,displayHeight/3);
}
else if(gameState === "play"){


if(player.collide(wolf) || player.collide(lion) || player.collide(panther) || player.collide(dog) || player.collide(dino)   ){
 gameState = "end";
}
}
  drawSprites();
}
