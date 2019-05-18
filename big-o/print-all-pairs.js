// print pairs of a given number n

const { log } = console;

/**
 * Solution
 * The big O of this will be O(n^2)
 * This is because there are nested loops in the function
 * and the number of operations required are determined by the size of n, twice
 */
const printAllPairs = n => {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      log(i, j);
    }
  }
};

printAllPairs(3);
