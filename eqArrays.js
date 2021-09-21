const eqArrays = function(arr1, arr2){
  let a = arr1.length
  let b = arr2.length
  if (a != b) {
  return false;
} else {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr2.length; j++){
      
    if (arr1[i] !== arr2[j][i]) {
      
      return false;
    } else {
      
      return true;
    }
   }
  } 
 } return;
}

module.exports = eqArrays;