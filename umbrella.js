class Umbrella {

    // constructor(x, y) {

    //     var options ={
    //         isStatic: true,
    //         restitution: 0.8
    //     }

    //   this.body = Bodies.circle(x, y, options);
    //   World.add(world, this.body);
    // }
    // display() {
    //     //var pos = this.body.position;
    //     ellipseMode(CENTER);
    //     fill("white");
    //     ellipse(this.body.position.x, this.body.position.y);
    // }
    
    constructor(x, y, width, height) {

        var options ={
            isStatic: true,
            restitution: 0.8
        }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width * 2;
      this.height = height * 2;
      
      this.image = loadImage("images/walking_1.png");
      World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
    
}