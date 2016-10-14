/* https://www.hackerrank.com/challenges/ctci-comparator-sorting

Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array. The Player class is provided in the editor below; it has two fields:

A string, .
An integer, .
Given an array of  Player objects, write a comparator that sorts them in order of decreasing score; if one or more players have the same score, sort those players alphabetically by name. To do this, you must create a Checker class that implements the Comparator interface, then write an int compare(Player a, Player b) method implementing the Comparator.compare(T o1, T o2) method.

Input Format

Locked stub code in the Solution class handles the following input from stdin: 
The first line contains an integer, , denoting the number of players. 
Each of the  subsequent lines contains a player's respective  and .

Constraints

Two or more players can have the same name.
Player names consist of lowercase English alphabetic letters.
Output Format

You are not responsible for printing any output to stdout. Locked stub code in Solution will create a Checker object, use it to sort the Player array, and print each sorted element.

[array of tuples]

Sample Input

5
amy 100
david 100
heraldo 50
aakansha 75
aleksa 150
Sample Output

aleksa 150
amy 100
david 100
aakansha 75
heraldo 50
Explanation

As you can see, the players are first sorted by decreasing score and then sorted alphabetically by name.

*/

const nameSearch = (array, nameToAdd, scoreToAdd, position) => {
  console.log("nameSearch called");
  let nameToCheck = array[position][0];
  // if the names are the same (meaning score and name the same, so identical), we can just put it there
  if (nameToAdd === nameToCheck) {
    return position;
  // if the name we're adding comes before the name we're checking in the alphabet
  } else if (nameToAdd < nameToCheck) {
    // if the next score to the left is no longer equal, we've found the position
    if (!array[position - 1] || array[position - 1][1] !== scoreToAdd) {
      // (return the one to the left so it's added in the proper spot)
      return position - 1;
    // else move the position one to the left and check again
    } else {
      nameSearch(array, nameToAdd, scoreToAdd, position - 1);
    }
  // if the name we're adding comes after the name we're checking in the alphabet
  } else if (nameToAdd > nameToCheck) {
    // if the next score to the right is no longer equal, we've found the correct position
    if (!array[position + 1] || array[position + 1][1] !== scoreToAdd) {
      return position + 1;
    // else move the position one to the right and check again
    } else {
      nameSearch(array, nameToAdd, scoreToAdd, position + 1);
    }
  }
};

const binaryAdd = (arrayOfTuples, tupleToAdd, left, right) => {
  console.log("left: ", left);
  console.log("right: ", right);
  // base case 1: left = right
  if (right === left || left < 0 || right < 0) {
    console.log("left inside base case: ", left);
    // return that as the position the element should be added at
    return left;
  // recursive cases: test index in between the left and right
  } else {
    let middle = Math.floor((right - left) / 2) + left;
    console.log("middle: ", middle);
    let scoreToAdd = tupleToAdd[1];
    let scoreToCheck = arrayOfTuples[middle][1];

    if (scoreToAdd < scoreToCheck) {
      // if less than that, pass in left as the same, and that middle as right
      return binaryAdd(arrayOfTuples, tupleToAdd, middle + 1, right);
    } else if (scoreToAdd > scoreToCheck) {
      // if more than that, pass in left as that and right as the same
      return binaryAdd(arrayOfTuples, tupleToAdd, left, middle);
    // base case 2: the scores are the same
    } else if (scoreToAdd === scoreToCheck) {
      // if equal, let's check the name by invoking our helper fn to get the name correct
      return nameSearch(arrayOfTuples, tupleToAdd[0], scoreToAdd, middle);
    }
  }
};

// console.log("'a' < 'b': ", 'a' < 'b');
// console.log("'b' < 'a': ", 'b' < 'a');
// console.log("'ruth' > 'luisa': ", 'ruth' > 'luisa');
// console.log("'alex' > 'alexa': ", 'alex' > 'alexa');

const sortPlayers = (players) => {
  let sortedPlayers = [];
  // loop through the passed in players array
  players.forEach(function(playerTuple) {
    // if there's nothing in the results array yet, add the first item
    if (sortedPlayers.length === 0) {
      sortedPlayers.push(playerTuple);
    // if there is, do a binary search to add the next tuple in the right place
    } else {
      let position = binaryAdd(sortedPlayers, playerTuple, 0, sortedPlayers.length);
      console.log("position: ", position);
      sortedPlayers.splice(position, 0, playerTuple);
    }
    console.log("sortedPlayers: ", sortedPlayers);
  });
  return sortedPlayers;
};


const players = [
  ['amy', 100],
  ['david', 100],
  ['heraldo', 50],
  ['aakansha', 75],
  ['aleksa', 150]
];

console.log("sortPlayers(players): ", sortPlayers(players));



