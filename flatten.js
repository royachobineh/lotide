const flatten = function(arr) {
  let total = 0
  for (i=0; i < arr.length; i++){
    if (Number.isInteger(arr[i])){
      total += arr[i];
    } else {
    for (j=0; j< arr[i].length; j++) {
      total += arr[i][j]

    }
  }
 }
  return total;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));