// Deep comparison

// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
function deepEqual(obj1, obj2) {
  if ((typeof obj1 === 'object' && obj1 != null) && (typeof obj2 === 'object' && obj2 != null)) {
    for (var property in obj1) {
      if (property in obj2) {
        if (!deepEqual(obj1[property], obj2[property]))
          return false;
      } else {
        return false;
      }
    }
    return true;
  } else if (obj1 !== obj2) {
    return false;
  } else {
    return true;
  }
}

// var obj = {object: 3, here: 1, tree: 1};
// var obj2 = {object: 3, here: 1, tree: 1};
//
// console.log(deepEqual(obj, obj2));

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
