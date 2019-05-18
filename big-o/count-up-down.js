// Count down and up for a given number n

const { log } = console; // destructure console.log statement 🤷‍♂️

/**
 * Solution
 * Will have a notation of O(n) because the number of operations are determined
 * by the size of n
 */
const countUpAndDown = n => {
  log("Going Up!");
  for (let i = 0; i < n; i++) {
    log(i);
  }
  log("At the top!\nGoing Down!");
  for (let j = n - 1; j >= 0; j--) {
    log(j);
  }
  log("Back down!");
};

countUpAndDown(20);
