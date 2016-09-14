// Recursion

function isEven(number) { // Declare function

  if (number === 0) { // Is number equal to 0
    return true;
  } else if (number === 1) { // Is number equal to 1
    return false;
  } else if (number < 0) { // Is number negative
    return isEven(-number); // If it is, flip the sign
  } else {
    return isEven(number - 2); // Else start recursion
  }

}


console.log(isEven(6));
console.log(isEven(75));
console.log(isEven(-50));
