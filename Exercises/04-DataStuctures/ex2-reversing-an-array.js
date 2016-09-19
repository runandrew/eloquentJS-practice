// Reversing an array

// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
function reverseArray(array) {
  var output = [];
  // write a for loop to loop from the end of the array to the begging
  for (i = array.length - 1; i >= 0; i--) {
    output.push(array[i]); // add to a new array each loop
  }
  return output;
}

console.log(reverseArray(["A", "B", "C"]));
// [ 'C', 'B', 'A' ]

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.
function reverseArrayInPlace(array) {
  // loop through the array, pop the end and unshift it to the beginning
  arrayLength = array.length;
  var counter = 0;
  for (var i = arrayLength - 1; i >= 0; i--) {
    array[arrayLength + counter] = array[i];
    counter++;
  }
  return array.slice(5, 10);
}

var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));



// Book solution for reverseArrayInPlace
function reverseArrayInPlaceAlt(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlaceAlt(arrayValue));
