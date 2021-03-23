const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, raindrop, umbrellaMan;

var ThuImg1, ThuImg2, ThuImg3, ThuImg4, Thunderbolt1;

var maxDrops = 250;
var drops = [];

function preload(){
    ThuImg1 = loadImage("images/thunderbolt/1.png");
    ThuImg2 = loadImage("images/thunderbolt/2.png");
    ThuImg3 = loadImage("images/thunderbolt/3.png");
    ThuImg4 = loadImage("images/thunderbolt/4.png");    
}

function setup(){
    createCanvas(700, 700);
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i <= maxDrops; i++) {
        drops.push(new Drop(random(0, 700), random(0, 500)));
    }
    
    umbrellaMan = new Umbrella(350, 535);

}

function draw(){
    background(0);
    Engine.update(engine);

    umbrellaMan.display();

    for(var i = 0; i<= maxDrops; i++) {
        drops[i].display();
        drops[i].updatePos();
    }

    thunder();
    
    drawSprites();
}   

function thunder() {
    if(frameCount % 150 === 0) {
        var num = random(1,4);
        Thunderbolt1 = createSprite(random(50, 600), random(0, 50), 100, 10);
        switch(num) {
            case 1: Thunderbolt1.addImage(ThuImg1);
            break;
            case 2: Thunderbolt1.addImage(ThuImg2);
            break;
            case 3: Thunderbolt1.addImage(ThuImg3);
            break;
            case 4: Thunderbolt1.addImage(ThuImg4);
            break;
            default: break;
        }
        Thunderbolt1.lifetime = 15;

    }
}

