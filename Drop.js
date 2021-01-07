class Drop {

    constructor(x, y, radius) {

        var options ={
            restitution: 0.8
        }

        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius * 2;
        console.log(this.body.radius)
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    }

}