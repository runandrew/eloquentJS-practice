// The Arguments Object

function noArguments() {}
noArguments(1, 2, 3);
function threeArguments(a, b, c) {}
threeArguments();


// argument property
function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter(2, 1, 2, 1, 2);

var journal = [];
function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++) {
    entry.events.push(arguments[i]);
  }
  journal.push(entry);
}
addEntry(true, "work", "touched tree", "pizza", "running", "television");
console.log(journal);
