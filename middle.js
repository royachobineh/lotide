const middle = function(array) {
  let middleArr = [];
  if (array.length <= 2) {

  } else if (array.length % 2 !== 0) {
    middleArr.push(array[Math.floor(array.length / 2)]);
  } else {
    middleArr.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  // Log and/or return the array of the middle element(s)
  console.log(middleArr);
  return middleArr;
};



// TEST CODE
// Test middle function
middle([1]); // []
middle([1, 2]); // []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]