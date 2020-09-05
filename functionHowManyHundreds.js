// Each container on the space ship can hold exactly 100 bottles of maple syrup. 
// A container will only be sent if it's full.
function howManyHundreds(bottles) {
  let containers = 0;
  containers = bottles / 100;
  return Math.floor(containers);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);