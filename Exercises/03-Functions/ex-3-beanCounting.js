// Bean Counting

var countChar = function(string, char) {

  howMany = 0;

  for (var i = 0; i < string.length; i++) {

    if (string.charAt(i) === char) {
      howMany += 1;
    }

  }

  return howMany;
}

console.log(countChar("kakkerlak", "k"));


// Recrusive

// var howManyB = 0;
//
// function countBs(string, pos) {
//
//   // console.log(pos);
//
//   if (string.charAt(pos) === "B") {
//     // console.log('Option 1');
//     howManyB += 1;
//   } else if (string.charAt(pos) === "") {
//     // console.log('Option 2');
//     return console.log(howManyB);
//   }
//
//   return countBs(string, pos + 1);
// }

// countBs("BBBBBBBBB", 0);
