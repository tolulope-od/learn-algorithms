// A function to log at LEAST 1 to 5 given a number n

const { log } = console; // Destruction, heck yes!

/**
 * Solution
 * The time complexity of this function will be O(n) because the time increases as n grows
 */

const logAtLeastFive = n => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    log(i);
  }
};

// A function to log AT MOST 1 to 5 given a number n

/**
* Solution
* The time complexity of this function will be O(1) because no matter the value of n, 
the number of operations perfomed remain constant
*/

const logAtMostFive = n => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    log(i);
  }
};

log("---AT LEAST 5---");
logAtLeastFive(10);

log("---AT MOST 5---");
logAtMostFive(10);
