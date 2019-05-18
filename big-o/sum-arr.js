// Sum all numbers in an array

const { log } = console;

/**
 *
 * @param {Array} arr the array containing the items to be summed
 * This function has a space complexity of O(1) because the space required remains constant as only two variables are created
 */
const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const myArr = [1, 3, 6, 89, 0, 87, 37, 76, 83];

log("--SUM--");
log(sum(myArr));

// Return all numbers of an array multiplied by 2

/**
 *
 * @param {Array} arr the array containing the numbers to be multiplied by 2
 * This function has a space complexity of O(n) because the space required grows as much as the size of the original array
 */
const double = arr => {
  let newArr = []; // declaring a new array takes up space
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); // the size of the new array grows in proportion to the length of the original array making the space complexity O(n) as it inceases as n increases
  }
  return newArr;
};

log("--DOUBLE---");
log(double(myArr));
