// click a spot on the canvas => origin point
// radiate outward from that point
// to make 2D cellular automata
// in setup, create a 2D array ->, set all values to 0 (off)
// in draw, separate calculating next step and drawing
// update (calculate values)
// then send to a render function to draw everything in cells

let cells = [];
const cellSize = 5;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

function setup() {
  createCanvas(windowW, windowH);
  noStroke();
  

  const numCellsCol = width / cellSize;
  const numCellsRow = height / cellSize;
  print("numCellsCol = " + numCellsCol);
  print("numCellsRow = " + numCellsRow);

  // initialize a 2D cell array, randomly filling it with 0 or 1
  // add a row and col of padding on each side of 0's to account for out of bounds exceptions
  for (let i = 0; i < numCellsCol; i++) {
    cells[i] = [];
    for (let k = 0; k < numCellsRow; k++) {
      cells[i][k] = 0;
    }
  }
  
  // randomly place several starting points. 
  let numRandStart = round(numCellsCol > numCellsRow ? numCellsCol : numCellsRow) * 0.1;
  for (let i = 0; i < numRandStart; i++) {
    let randomX = round(random(0, numCellsCol));
    let randomY = round(random(0, numCellsRow));
    print("(" + randomX + ", " + randomY + ")");
    cells[randomX][randomY] = 1;
  }
  
  renderCells(cells);
  
  
  //frameRate(10);
}

function draw() {
  background("#a3d29a");
  updateCells();
  renderCells();
}


// input: a 2D array of cell "positions"
// calculates the new positions
// returns a new array
function updateCells() {
  let newCells = [];
  
  for (let i = 0; i < cells.length; i++) {
    newCells[i] = [];
    for (let k = 0; k < cells[i].length; k++) {
      let top;
      let left;
      let center;
      let right;
      let bottom;
      center = cells[i][k] ?? 0;

      // account for out of bounds exceptions
      if (i == 0) { // in first column
        left = 0; 
      } else {
        left = cells[i - 1][k] ?? 0;
      } 
        
      if (k == 0) { // in first row
        top = 0;
      } else {
        top = cells[i][k - 1] ?? 0;
      }
        
      if (i == cells.length - 1) { // in last column
        right = 0;
      } else {
        right = cells[i + 1][k] ?? 0;
      }
        
      if (k == cells[i].length - 1) { // in last row
        bottom = 0;
      } else {
        bottom = cells[i][k+1] ?? 0;
      }
      

      let neighborhood = round(left+bottom * sin(left +bottom));
      //print("neighborhood = " + neighborhood);
        
      newCells[i][k] = neighborhood;
      
      // if (neighborhood == 1) {
      //   newCells[i][k] = 1;
      // }
      // else if (neighborhood == 2) {
      //   newCells[i][k] = 2;
      // } 
      // else {
      //   newCells[i][k] = 0;
      // }
    }
  }
  cells = newCells;
  print(cells);
}

        
let xoff = 0.0;
// input: a 2D array of updated cell states (on or off)
// renders a 2D array of cells based on values
function renderCells() {
  noStroke();
  for (let i = 0; i < cells.length; i++) {
    for (let k = 0; k < cells[i].length; k++) {
      if (cells[i][k] == 1) {
        stroke("#000000");
        //fill(0);
      } else if (cells[i][k] == 2) {
        stroke("#FFA200");
        //fill("#9783BD")
      } else if (cells[i][k] == 3) {
        stroke("#CB82F5");
        //fill("#AAF582");
      } else if (cells[i][k] == 4) {
        stroke("#E2228B");
        //fill("#E2228B");
      } else {
        stroke("#FFFFFF");
        //fill("#C1D9EB");
      }

      //rect(i * cellSize, k * cellSize, cellSize, cellSize);
      line (i*cellSize, k*cellSize, i*cellSize+4*cellSize, k*cellSize+4*cellSize);
      //ellipse(i * cellSize+cellSize/2, k * cellSize+cellSize/2, cellSize, cellSize*2);
      rotate(noise(xoff));
    }
  }
  xoff+=0.0001;

}

