// The Sum of a Range

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end, increment) {
  var output = [];
  if (increment === undefined) {
    if (start < end) increment = 1;
    else increment = -1;
  }
  // Loop from the start number to the end
  if (increment < 0) {
    for(var i = start; i >= end; i += increment) {
      output.push(i);
    }
  }
  else {
    for(var i = start; i <= end; i += increment) {
      output.push(i);
    }
  }

  return output;
}

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

function sum(nums) {
  var output = 0;
  // Take in the array, loop through each value and add it to the previous;
  for (var i = 0; i < nums.length; i++) {
    output += nums[i];
  }
  return output;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
