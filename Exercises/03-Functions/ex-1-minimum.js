// Minimum

function min(first, second) { // minimize function
  if (first < second) { // is the first number less than the second? if so, pass the first
    return first;
  } else {
    return second;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));
