/*
Conway's Game of Life

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated".
Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by over-population.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

TO DO:
Implement the automation algorithm. Use helper functions as needed.

Example input:
[[1, 0, 0, 0],
[0, 1, 1, 0],
[1, 0, 0, 0]]
After one generation:
[[0, 1, 0, 0 ],
[1, 1, 0, 0 ],
[0, 1, 0, 0 ]]

RUTH SUMMARY:
problem: make a function that updates a matrix with each generation.

0 - 1 neighbors: 0
2 neighbors: stays as it was
3 neighbors: 1
4+ neighbors: 0 
*/ 


// helper fn: takes in a tuple representing a coordinate of a matrix, returns the sum of the numbers that surround it on all sides (including corners).
var countNeighbors = function(universe, i, j) {
  numberOfNeighbors = 0;
  var lastColumnIndex = universe[i].length - 1;
  var matrix = universe.slice();

  if (i - 1 >= 0) {
    if (j - 1 >= 0) {
      numberOfNeighbors += matrix[i - 1][j - 1];
    }
    numberOfNeighbors += matrix[i - 1][j];
    if (j + 1 <= lastColumnIndex) {
      numberOfNeighbors += matrix[i - 1][j + 1];
    }
  }
    
  if (j - 1 >= 0) {
    numberOfNeighbors += matrix[i][j - 1];
  }
  if (j + 1 <= lastColumnIndex) {
    numberOfNeighbors += matrix[i][j + 1];
  }

  if (i + 1 < matrix.length) {
    if (j - 1 >= 0) {
      numberOfNeighbors += matrix[i + 1][j - 1];
    }
    numberOfNeighbors += matrix[i + 1][j];
    if (j + 1 <= lastColumnIndex) {
      numberOfNeighbors += matrix[i + 1][j + 1];
    }
  }

  // var countIfExists = function(state) {
  //   if (state) {
  //     numberOfNeighbors += state;
  //   }
  // };




  // // check the row above, if it exists
  // if (i - 1 >= 0) {
  //   for (var indexRow = j - 1; indexRow <= j + 1; indexRow++) {
  //     // count it if the index row exists
  //     if (indexRow >= 0 && indexRow < numOfColumns) {
  //       countIfExists(matrix[i - 1][indexRow]);
  //     }
  //   }
  // }

  // // check the row below, if it exists
  // if (i + 1 < universe.length) {
  //   for (var indexRow = j - 1; indexRow <= j + 1; indexRow++) {
  //     // count it if the index row exists
  //     if (indexRow >= 0 && indexRow < numOfColumns) {
  //       countIfExists(universe[i + 1][indexRow]);
  //     }
  //   }
  // }

  // // check the left side
  // if (j - 1 >= 0) {
  //   countIfExists(universe[i][j - 1]);
  // }

  // // check the right side
  // if (j + 1 < numOfColumns) {
  //   countIfExists(universe[i][j + 1]);
  // }

  return numberOfNeighbors;
};


// helper fn: takes in 1. the original state of the coordinate (0 or 1), and 2. a number respresenting the sum of the numbers around that coordinate, and returns the value that coordinate should be in the next generation (0 or 1).
var stateInNextGen = function(originalState, numberOfNeighbors) {
  if (numberOfNeighbors <= 1) {
    return 0;
  }
  if (numberOfNeighbors === 2) {
    return originalState;
  }
  if (numberOfNeighbors === 3) {
    return 1;
  }
  if (numberOfNeighbors >= 4) {
    return 0;
  }
};

// fn: takes in a matrix (array of arrays), and returns that same matrix now representing the next generation
var tickGeneration = function(universe) {
  var originalUniverse = [];

  // loop through the rows
  for (var i = 0; i < universe.length; i++) {
    originalUniverse.push([]);
    // loop through the columns within each row
    for (var j = 0; j < universe[i].length; j++) {
      originalUniverse[i][j] = universe[i][j];
    }
  }

  // loop through the rows
  for (var i = 0; i < originalUniverse.length; i++) {
    // loop through the columns within each row
    for (var j = 0; j < originalUniverse[i].length; j++) {
      var numberOfNeighbors = countNeighbors(originalUniverse, i, j);
      // change the state in the universe passed in according to our helper fn's results
      universe[i][j] = stateInNextGen(originalUniverse[i][j], numberOfNeighbors);
    }
  }
  return universe;
};

var testUniverse = 
[[1, 0, 0, 0],
[0, 1, 1, 0],
[1, 0, 0, 0]];

/* test output:
[[0, 1, 0, 0 ],
[1, 1, 0, 0 ],
[0, 1, 0, 0 ]] */

tickGeneration(testUniverse);
console.log("testUniverse: ", testUniverse);

