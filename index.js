// ES5 Map Callback

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }


//   ## **ES2015 Arrow Functions Shorthand**

//   Refactor the above code to use two arrow functions. Turn it into a one-liner.

let double2 = (arr) => arr.map((val) => val * 2);



// ## **Refactor the following function to use arrow functions:**

// Replace ALL functions with arrow functions:
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

let squareAndFindEvens2 = (numbers) => numbers.map((num) => num ** 2).filter((num) => num % 2 === 0);


