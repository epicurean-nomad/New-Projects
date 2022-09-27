

class Cell{
  constructor(i,j){
    this.i = i;
    this.j = j;
    this.visited = false;
    this.walls = [true,true,true,true];
    this.options = []
  }
  next(){
    path.push(curr)
    //console.log("I'm in next")
    var options = []
    //console.log(grid.length)
    if(this.i>0){
      if(grid[this.i-1][this.j].visited == false){
        options.push(grid[this.i-1][this.j])        
      }
    }
    if(this.j>0){
      if(grid[this.i][this.j-1].visited == false){
        options.push(grid[this.i][this.j-1])        
      }
    }
    if(this.i<cols-1){
      //console.log(grid[i+1][j])
      if(grid[this.i+1][this.j].visited == false){
        options.push(grid[this.i+1][this.j])        
      }
    }
    if(this.j<rows-1){
      if(grid[this.i][this.j+1].visited == false){
        options.push(grid[this.i][this.j+1])        
      }
    }
    //console.log("options",this.options)
    var next_cell;
    if(options.length >0){
      next_cell = options[rand(0,options.length-1)]
      //console.log("next cell chosen",next_cell)
      if(this.i>0){
        if(next_cell == grid[this.i-1][this.j]){
          next_cell.visited = true;
          curr.walls[3] = false;
          next_cell.walls[1] = false;
        }
      }
      if(this.j>0){
        if(next_cell == grid[this.i][this.j-1]){
          next_cell.visited = true;
          grid[this.i][this.j].walls[0] = false;
          next_cell.walls[2] = false; 
        }
      }
      if(this.i<cols-1){
        if(next_cell == grid[this.i+1][this.j]){
          next_cell.visited = true;
          curr.walls[1] = false;
          next_cell.walls[3] = false; 
        }
      }
      if(this.j<rows-1){
        if(next_cell == grid[this.i][this.j+1]){
          next_cell.visited = true;
          curr.walls[2] = false;
          next_cell.walls[0] = false; 
        }
      }
    return next_cell
    }
    else{
      path.pop();
      fill(0,0,255);
      noStroke();
      rect(this.i*w,this.j*w,w,w);
      path.pop();
      next_cell = path[path.length-1];
      if(next_cell.i == 0 && next_cell.j == 0){
        end = true;
      }
      //console.log(next_cell)
      return next_cell
    }
    
  }
  show(){
    stroke(0)
    if(this.walls[0] == true){
      line((this.i+1)*w,(this.j)*w,this.i*w,this.j*w); //top
    }
    if(this.walls[1] == true){
      line((1+this.i)*w,(1+this.j)*w,(this.i+1)*w,(this.j)*w);//right
    }
    if(this.walls[2] == true){
      line(this.i*w,(this.j+1)*w,(this.i+1)*w,(this.j+1)*w);//bottom
    }
    if(this.walls[3] == true){
      line(this.i*w,this.j*w,this.i*w,(this.j+1)*w);//left
    }
    if(this.visited){
      fill(0,255,255);
      noStroke();
      rect(this.i*w,this.j*w,w,w);
    }
  }
  
}
