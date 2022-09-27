
const w = 30;
let rows;
let cols;
var end = false;
let curr;
var player_x = w/2;
var player_y = w/2;
const player_diam = w/2;
grid = [];
path = [];
let p;
let rew_i;
let rew_j;







function setup() {
  
  createCanvas(windowWidth, windowHeight);
  rows = floor(height/w);
  cols = floor(width/w);
  createGrid();
  
  p = new Player(w/2,w/2)
  reward = createReward();
  curr = grid[0][0];
  curr.visited = true;
  //frameRate(4)
  //console.log("done")
}


function draw() {
  background(220);
  if(end == true){
    //here goes code part-2
    for(i = 0;i<cols;i++){
      for(j=0;j<rows;j++){
        grid[i][j].show()
      }
    }
    if (keyIsDown(RIGHT_ARROW)){//right arrow
      p.x += 2;
    }
    if (keyIsDown(LEFT_ARROW)){//left arrow
      p.x -= 2;
    }
    if (keyIsDown(UP_ARROW)) {//up arrow
      p.y -= 2;
    } 
    if (keyIsDown(DOWN_ARROW)) {//down arrow
      p.y += 2;
    }
    p.show()
    reward.show()
    p.updateLocation();
    p.checkCollision();
    //console.log(p.x,p.y,reward.i,reward.j)
    if(((p.x > reward.i*w)&&(p.x < (reward.i+1)*w))&&((p.y > reward.j*w)&&(p.y < (reward.j+1)*w))){
      grid = [];
      path = [];
      end = false;
      createGrid();
      p = new Player(w/2,w/2)
      reward = createReward();
      curr = grid[0][0];
      // curr.visited = true;
      
      // for(i = 0;i<cols;i++){
      //   for(j=0;j<rows;j++){
      //     grid[i][j].show()
      //   }
      // }
      // curr.visited = true;
      // // console.log(curr)
      // curr = curr.next()
    }
    return
  }
    
  for(i = 0;i<cols;i++){
    for(j=0;j<rows;j++){
      grid[i][j].show()
    }
  }
  curr.visited = true;
  // console.log(curr)
  curr = curr.next()
}



function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createGrid(){
  //console.log("I'm here")
  for(i = 0;i<cols;i++){
    let tempArr = []
    for(j=0;j<rows;j++){
      let nc = new Cell(i, j);
      if (nc == undefined) {
        console.log(i, j);
        return;
      }
      console.log(nc)
      tempArr.push(nc);
    }
    grid.push(tempArr)
  }
  console.log(grid[0][21])
}
function createReward(){
  rew_i = rand(0,cols);
  rew_j = rand(0,rows);
  reward = new Reward(rew_i,rew_j);
  return reward;
}






//console.log(curr)


