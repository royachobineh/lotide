function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

console.log(reverseString("hello"));


function reverse(str){
  let newStrin = "";
  for(let i=str.length - 1; i >= 0; i--){
    newStrin += str[i];
  } return newStrin;
}

console.log(reverse("hello"));