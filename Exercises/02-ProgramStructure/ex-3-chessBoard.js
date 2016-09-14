// Chess Board

// Initialize variables
var size = 8; // size of the Board
var output; // output to console.log

output = ""; // Set output to blank string
for (var k = 0; k < size; k++) {

  for (var i = k; i < (k + size); i++) { // for loop for horizontal

    if (i % 2 === 0) { // detect even or odd
      output += " ";
    } else {
      output += "#";
    }

  }
  output += "\n";

}
console.log(output) // log output
