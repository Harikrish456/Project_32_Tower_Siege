class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/hexagon.png");  
  }

  display() {
    
    super.display();
    push();
        translate(this.body.position.x, this.body.position.y);
  imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
  }
}
