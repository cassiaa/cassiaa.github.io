// click a spot on the canvas => origin point
// radiate outward from that point
// to make 2D cellular automata
// in setup, create a 2D array ->, set all values to 0 (off)
// in draw, separate calculating next step and drawing
// update (calculate values)
// then send to a render function to draw everything in cells

let cells = [];
const cellSize = 5;
let color1; // use color1 when currentColor is true
let color2; // use color2 when currentColor is false
let currentColor = true;

let windowW = window.innerWidth;
let windowH = window.innerHeight;

function setup() {
  createCanvas(windowW, windowH);
  noStroke();
  background(255);
 

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
 
  renderCells(cells);
  
  frameRate(10);
}


function draw() {
  background(255);
  updateCells();
  renderCells();
}

// given an x and y index of the cells array, return the sum of the cell plus its vertical (top and bottom) and horizontal (left and right) neighbors
function getNeighborhood(x, y) {
  let top;
  let left;
  let center;
  let right;
  let bottom;
  center = cells[x][y] ?? 0;

  // account for out of bounds exceptions
  if (x == 0) { // in first column
    left = 0; 
  } else {
    left = cells[x - 1][y] ?? 0;
  } 

  if (y == 0) { // in first row
    top = 0;
  } else {
    top = cells[x][y - 1] ?? 0;
  }

  if (x == cells.length - 1) { // in last column
    right = 0;
  } else {
    right = cells[x + 1][y] ?? 0;
  }

  if (y == cells[x].length - 1) { // in last row
    bottom = 0;
  } else {
    bottom = cells[x][y+1] ?? 0;
  }

  let total = top + left + center + right + bottom;
  return round(sqrt(total));
  //print("neighborhood = " + neighborhood);
}
    
// resets the cells surrounding a given cell to 0;
function resetNeighborhood(x, y){
  let top;
  let left;
  let center;
  let right;
  let bottom;
  
  cells[x][y] = 0;

  // account for out of bounds exceptions
  
  // not in first column 
  if (x != 0) { 
    cells[x-1][y] = 0;
  } 

  // not in first row
  if (y != 0) { 
    cells[x][y-1] = 0
  } 

  // not in last column
  if (x != cells.length - 1) { 
    cells[x+1][y] = 0;
  }

  // not in last row
  if (y != cells[x].length - 1) {
    cells[x][y+1] = 0;
  } 
  let total = top + left + center + right + bottom;
}

// input: a 2D array of cell "positions"
// calculates the new positions
// returns a new array
function updateCells() {
  let newCells = [];
  
  for (let i = 0; i < cells.length; i++) {
    newCells[i] = [];
    for (let k = 0; k < cells[i].length; k++) {
      let neighborhood = getNeighborhood(i,k);
      newCells[i][k] = neighborhood; 
    }
  }
  cells = newCells;
}

// input: a 2D array of updated cell states (on or off)
// renders a 2D array of cells based on values
function renderCells() {
  noStroke();
  for (let i = 0; i < cells.length; i++) {
    for (let k = 0; k < cells[i].length; k++) {
      if (cells[i][k] == 0) {
        fill(0);
      } else if (cells[i][k] == 1) {
        fill(255);
      } else if (cells[i][k] == 2) {
        fill("#ff0000");
      } else if (cells[i][k] == 3) {
        fill("#00ff00");
      } else if (cells[i][k] == 4) {
        fill ("#0000ff");
      } else {
        // neighborhood == 0 or is greater than 8
        fill(0);
      }
      rect(i * cellSize, k * cellSize, cellSize, cellSize);
      //ellipse(i * cellSize+cellSize/2, k * cellSize+cellSize/2, cellSize, cellSize);
    }
  }
}
        
function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}

        
function mouseClicked() {
  // get x and y pos and convert to cell size
  let x = round(mouseX / cellSize);
  let y = round(mouseY / cellSize);
  print ("(" + x + ", " + y + ")");
  print("cells[x][y] = " + cells[x][y]);
  
  if (cells[x][y] == 0) {
    cells[x][y] = 1;
    updateCells();    
  } else if (cells[x][y] == 4) {
    resetNeighborhood(x, y);
  }
  currentColor = !currentColor;
  renderCells();
  print(cells);
}
