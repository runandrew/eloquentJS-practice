// FizzBuzz

// ** My solution
// // Initialize variables
// var flagOverride = false; // Flag to tell program that the number will be overwritten
// var i; // Counter
//
// // Loop through each number
// for (i = 1; i <= 100; i++) {
//
//   flagOverride = false; // Re-initialize flag
//   output = i; // Output the number if no other overrides are made
//
//   if (i % 3 === 0) { // Check for divisible by 3
//     output = "Fizz";
//     flagOverride = true; // Flag an override
//   }
//
//   if (i % 5 === 0) { // Check for divisible by 5
//     if (flagOverride) { // Check if also divisible by 3
//       output += "Buzz";
//     } else {
//       output = "Buzz";
//     }
//   }
//
//   console.log(output);
// }


// Book solution
var output;

for (i = 1; i <= 100; i++) {
  output = "";

  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }

  console.log(output || i);
}
