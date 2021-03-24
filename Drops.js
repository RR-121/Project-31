class Drop {
    constructor(x, y) {
        var options = {isStatic : false, restitution : 1, density : 1, friction : 0}
        this.drop = Bodies.circle(x, y, 5, options);
        this.x = x;
        this.y = y;
        this.radius = 5;
        World.add(world, this.drop);
    }
    updatePos() {
        if(this.drop.position.y > height) {
            Matter.Body.setPosition(this.drop, {x : random(0, 700), y : random(-100, 200)});
        }
    }
    display() {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.drop.position.x, this.drop.position.y, this.radius, this.radius);
    }
}