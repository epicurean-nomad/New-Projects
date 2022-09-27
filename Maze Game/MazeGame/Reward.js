class Reward{
  constructor(i,j){
    this.i = i;
    this.j = j;
  }
  show(){
    noStroke();
    fill(0,0,255);
    rect(this.i*w,this.j*w,w,w);
  }
}