const assertEqual = function(actual, expected) {
  if (actual === expected) {
  // console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
  // console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrA, arrB) => {
  let isEqual = true;
  if (arrA.length !== arrB.length) {
    isEqual = false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};

const eqObjects = function(object1, object2) {
  let result = true;
  //check if length are same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log(object1.length);
    return result = false;
  }
  for (let item of Object.keys(object1)) {
    //console.log("key is", item, "value ", object1[item]);
    //if object2 has key
    if (object2[item]) {
      //if value are same
      //check what type of value it is, value, array, or object

      if (Array.isArray(object2[item])) {
        // use eqArray
        console.log(object1[item], object2[item]);
        result = eqArrays(object1[item], object2[item]);

      } else {
        //if it is value, compare directly
        if (object1[item] === object2[item]) {
        //console.log("both object has value", item, object1[item]);
        } else {
          result = false;
        }
      }

    } else {
      result = false;
    }
  }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);