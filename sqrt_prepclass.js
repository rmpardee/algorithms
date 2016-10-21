//Write a function that checks if a number is a perfect square
//If the number is a perfect square, return its square root. 
//Else, return an object of the two perfect squares nearest the input value, respectively named "low", and "high".
//E.g
//isPerfectSquare(25); //  { isPerfectSquare: true, squareRoot: 5 }
//isPerfectSquare(24); // { isPerfectSquare: false, low: 4, high: 5 }

isPerfectSquare = (number) => {
  let squareRoot = Math.sqrt(number);
  let low = Math.floor(squareRoot);
  let high = low + 1;

  return squareRoot === low ? squareRoot : {low, high};
};

let trueTest = isPerfectSquare(9);
let falseTest = isPerfectSquare(8);

console.log("trueTest: ", trueTest);
console.log("falseTest: ", falseTest);