const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;

function preload() {
    BackgroundImg=loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 500, 300, 350);

    box1 = new Box(900,570,70,70);
    box2 = new Box(1120,570,70,70);
    pig1 = new Pig(1010, 600);
    log1 = new Log(1010,510,300, PI/2);

    box3 = new Box(900,490,70,70);
    box4 = new Box(1120,490,70,70);
    pig3 = new Pig(1010, 470);

    log3 =  new Log(1010,430,300, PI/2);

    box5 = new Box(1010,410,70,70);
    log4 = new Log(960,370,150, PI/7);
    log5 = new Log(1070,370,150, -PI/7);

    bird = new Bird(200,50);

    
    slingshot = new SlingShot(bird.body,{x:200, y:159});
}

function draw(){
    
        background(BackgroundImg);
    
        noStroke();
        textSize(20);
        fill(255);
        text("Score=" + score, 1060, 40);

        fill("blue");
        textSize(20);
        text("Drag the 'Angry Bird' and release it towards the 'Enemy Birds'",30,20);
        fill("red");
        text("*Note you are having only one chance want to play again refresh the page",30,50);
    
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    
    slingshot.display();
    console.log(bird.body.speed);    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    
    gameState = "launched";
}