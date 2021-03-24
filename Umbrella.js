class Umbrella {
    constructor(x, y) {
        this.umbrella = Bodies.circle(x, y, 400);
        this.x = x;
        this.y = y;
        this.radius = 400;
        this.image = loadImage("images/Walking Frame/walking_1.png");
    }
    display() {
        var pos = this.umbrella.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 400, 400);
        
    }
}