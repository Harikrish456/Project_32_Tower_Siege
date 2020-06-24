class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibilty = 255;
  }

  score(){  
    if(this.visibilty<0 && this.visibilty> -105){
     score = score + 1;     
    }
  }

display(){
  if(this.body.speed < 6){
    super.display();
  } else {
    push();
    World.remove(world,this.body);
    this.visibilty = this.visibilty - 5;
    tint(255,this.visibilty);
    pop();
  }
}
}

