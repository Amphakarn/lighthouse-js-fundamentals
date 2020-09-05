const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
console.log("Ingredients for Banana Bread (using while loop)");
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("Ingredients for Banana Bread (using for loop)");
for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Ingredients for Banana Bread (using while loop - printing backwards)");
let j = ingredients.length - 1;
while (j >= 0) {
  console.log(ingredients[j]);
  j--;
}

console.log("Ingredients for Banana Bread (using for loop - printing backwards)");
for (let y = ingredients.length-1; y >= 0; y--) {
  console.log(ingredients[y]);
}