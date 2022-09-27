class Player{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.cellI = 0;
    this.cellJ = 0;
    this.radius = player_diam/2;
  }
  show(){
    fill(255,0,0)
    circle(this.x,this.y,player_diam);
  }
  updateLocation(){
    if(this.x > (this.cellI + 1)*w){
      this.cellI+=1;
    }
    if(this.x < (this.cellI)*w){
      this.cellI-=1;
    }
    if(this.y > (this.cellJ + 1)*w){
      this.cellJ+=1;
    }
    if(this.y < (this.cellJ)*w){
      this.cellJ-=1;
    }
  }
  checkCollision(){
    //collision with walls
    if((this.x + this.radius > (this.cellI+1)*w)&&(grid[this.cellI][this.cellJ].walls[1] == true)){
         this.x  = (this.cellI+1)*w - this.radius;
    }
    if((this.x - this.radius < (this.cellI)*w)&&(grid[this.cellI][this.cellJ].walls[3] == true)){
         this.x  = (this.cellI)*w + this.radius;
    }
    if((this.y + this.radius > (this.cellJ+1)*w)&&(grid[this.cellI][this.cellJ].walls[2] == true)){
         this.y  = (this.cellJ+1)*w - this.radius;
    }
    if((this.y - this.radius < (this.cellJ)*w)&&(grid[this.cellI][this.cellJ].walls[0] == true)){
         this.y  = (this.cellJ)*w + this.radius;
    }
  }
  
}