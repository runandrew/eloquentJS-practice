// Further Arrayology

//unshift() and shift()
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}

function whatIsNext() {
  return todoList.shift();
}

function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

// indexOf, lastIndexOf
console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 4, 2, 1].lastIndexOf(2));

// slice
console.log([0, 1, 2, 3, 4].slice(0, 1));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 0));
