/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*

My recursive questions:
1) when do you need to return? (to tell it to stop?)
2) when do you pass parameters into the subroutine or not?

TO EXPLORE in below versions:
1) What's with the .pop showing up even though it's after the push?

LEARNED:
1) must be a subroutine, with the results array being built up

2) you return after the base case (to tell it that iteration of the call to the subroutine is done), and not anywhere in the recursive case

3) You can define the throws array either outside the scope of the subroutine or as a parameter to the subroutine

a. whether or not you pass in the throws array:
- METHOD 1: you can use slice before pushing to the results array, push to add the throw to the throws array, and pop after the recursive call
- you can't pop after the base case, only after the recursive call (why?)

b. if you DO pass in the throws array as a parameter:
- if you use method 1, you have to push before the recursive call, not in it, since .push returns 1 not the array
- METHOD 2: you could also NOT use slice or pop, and instead just pass throws.concat(options[i]) directly in the recursive call

4) There is no need to pass in the turn count, it's irrelevant
a. if you DO pass in the turn count:
- you can count up or down, doesn't matter
- you CAN'T use -- or ++, only +1 or -1 (why? - probably bc I was trying it after?, has to be before)


*/
// v1a: passing in just throws, uses slice and pop

// var rockPaperScissors = function (rounds) {
//   var options = ['rock', 'paper', 'scissors'];
//   var allThrowsOptions = [];

//   var createThrows = function(throws) {
//     // base case: my throws array is as long as the rounds passed in
//     if (throws.length === rounds) {
//       allThrowsOptions.push(throws);
//       // THIS DOES NOT WORK
//       // throws.pop();
//       return;
//     }
//     // recursive case: my throws array is not long enough yet
//     // loop through the throw options
//     for (var i = 0; i < options.length; i++) {

//       throws.push(options[i]);
//       createThrows(throws.slice());
//       // NOTE: we need .pop() here (when we didn't with .concat) because we actually altered throws itself with push
//       throws.pop();

//       // THIS DOES NOT WORK (bc .push returns 1, not the array):
//       // createThrows(throws.push(options[i]));
//       // throws.pop();
//     }

//   };
//   createThrows([]);
//   return allThrowsOptions;
// };

// v1b: passing in just throws, using concat

// var rockPaperScissors = function (rounds) {
//   var options = ['rock', 'paper', 'scissors'];
//   var allThrowsOptions = [];

//   var createThrows = function(throws) {
//     // base case: my throws array is as long as the rounds passed in
//     if (throws.length === rounds) {
//       allThrowsOptions.push(throws);
//       return;
//     }
//     // recursive case: my throws array is not long enough yet
//     // loop through the throw options
//     for (var i = 0; i < options.length; i++) {
//       // NOTE: since throws.concat(options[i]) returns the array itself, we could just pass it in directly instead (which we couldn't do with push)
//       createThrows(throws.concat(options[i]));

//       // (optionally we could have done:)
//       // var newThrows = throws.concat(options[i]);
//       // createThrows(newThrows);
//     }

//   };
//   createThrows([]);
//   return allThrowsOptions;
// };


// v2a: not passing in anything, throws is outside the scope of the subroutine, using slice and pop

// var rockPaperScissors = function (rounds) {
//   var options = ['rock', 'paper', 'scissors'];
//   var throws = [];
//   var allThrowsOptions = [];

//   var createThrows = function() {
//     // base case: my throws array is as long as the rounds passed in
//     if (throws.length === rounds) {
//       allThrowsOptions.push(throws.slice());
//       return;
//     }
//     // recursive case: my throws array is not long enough yet
//     // loop through the throw options
//     for (var i = 0; i < options.length; i++) {
//       throws.push(options[i]);
//       createThrows();
//       throws.pop();
//     }
//   };
//   createThrows();
//   return allThrowsOptions;
// };

// v2b: DOESN'T WORK - not passing in anything, throws is outside the scope of the subroutine, using concat

// var rockPaperScissors = function (rounds) {
//   var options = ['rock', 'paper', 'scissors'];
//   var throws = [];
//   var allThrowsOptions = [];

//   var createThrows = function() {
//     // base case: my throws array is as long as the rounds passed in
//     if (throws.length === rounds) {
//       allThrowsOptions.push(throws);
//       return;
//     }
//     // recursive case: my throws array is not long enough yet
//     // loop through the throw options
//     for (var i = 0; i < options.length; i++) {
//       // DOES NOT WORK, just as this didn't work even when we were passing in throws to the subroutine (though now it breaks the entire function since there's no other way to call createThrows without an argument)
//       throws.concat(options[i]);
//       createThrows();
//     }
//   };
//   createThrows();
//   return allThrowsOptions;
// };

// v3: passes in # of turns left

// var rockPaperScissors = function (rounds) {
//   var options = ['rock', 'paper', 'scissors'];
//   var allThrowsOptions = [];
//   var createThrows = function(turnsLeft, throws) {
//     // base case: my throws array is as long as the rounds passed in
//     if (turnsLeft === 3) {
//       allThrowsOptions.push(throws.slice());
//       return;
//     }
//     // recursive case: my throws array is not long enough yet
//     // loop through the throw options
//     for (var i = 0; i < options.length; i++) {
//       throws.push(options[i]);
//       // NOTE: you can only use +1, can't use ++
//       createThrows(turnsLeft+1, throws);
//       throws.pop();
//     }

//   };
//   createThrows(0, []);
//   return allThrowsOptions;
// };

// Nov 14, 2016 extra practice (RPS from memory)

const rockPaperScissors = (rounds) => {
  const options = ['rock', 'paper', 'scissors'];
  const permutations = [];

  const makePermutations = (currentPermutation = []) => {
    // base case 1: if current is the length of rounds input, add to permutations array
    if (currentPermutation.length === rounds) {
      permutations.push(currentPermutation);
      return;
    // recursive case: not long enough yet, recurse in a loop that goes through all options
    } else {
      options.forEach(option => {
        const newCurrent = currentPermutation.slice();
        newCurrent.push(option);
        makePermutations(newCurrent);
      });
    }
  };

  makePermutations();
  return permutations;
};

console.log("rockPaperScissors(1): ", rockPaperScissors(1));