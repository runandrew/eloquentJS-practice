// The Math Object

function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// {x: , y: }

// a whole number that is random
console.log(Math.floor(Math.random()*10));
