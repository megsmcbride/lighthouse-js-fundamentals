function calculateRectangleArea(length,width) {
  const areaRectangle = length * width;
  if (areaRectangle > 0){
    return areaRectangle;
  }
}

function calculateTriangleArea(base,height) {
  const areaTriangle = base * height / 2;
  if (areaTriangle > 0) {
    return areaTriangle;
  }
}

function calculateCircleArea(radius) {
  if(radius < 0) {
    return; 
  }
  const areaCircle = Math.PI * radius * radius
  if(areaCircle > 0) {
    return areaCircle 

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