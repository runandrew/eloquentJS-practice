// A List

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument
function arrayToList(array) {
  // write a loop that runs as many times as there are elements in the array
  // asign the value of the current item to the value in the array
  // give the last element a rest value of 'null'
  var output = {};
  for (var i = array.length - 1; i >= 0; i--) {
    var outputPrev = output;
    output = {};
    output.value = array[i];

    if (i === array.length - 1) {
      output.rest = null;
    } else {
      output.rest = outputPrev;
    }
  }
  return output;
}

var list = arrayToList([10, 20, 30]);

// Book's alternative
function arrayToListAlt(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  // Loop through the array
  // push the value to the new array
  // set the object equal to the object in rest
  // if rest is null, end
  var array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

console.log(listToArray(list));

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
}

// write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(element, list) {
  return {value: element, rest: list};
}

console.log(prepend(10, prepend(20, null)));

// nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element
function nth(list, number) {
  if (list.rest === null && number > 0) { // return undefined if there is no such element
    return undefined;
  } else if (number === 0) { // if number is 0, return the value
    return list.value;
  } else { // if number is greater than 0, return the function with rest, and number-1
    return nth(list.rest, number - 1);
  }
}

console.log(nth(arrayToList([10, 20, 30]), 0));

// Book alternative
function nthAlt(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nthAlt(list.rest, n-1);
}
