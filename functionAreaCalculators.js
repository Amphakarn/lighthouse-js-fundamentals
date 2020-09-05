function calculateRectangleArea(length, width) {
  let area = 0;
  if (length >= 0 && width >= 0) {
    return area = length * width;
  } else {
    return undefined;
  }  
}

function calculateTriangleArea(base, height) {
  let area = 0;
  if (base >= 0 && height >= 0) {
    return area = (base * height) / 2;
  } else {
    return undefined;
  }  
}

function calculateCircleArea(radius) {
  let area = 0;
  if (radius >= 0) {
    return area = Math.PI * (Math.pow(radius, 2));
  } else {
    return undefined;
  }   
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined