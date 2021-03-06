// Write a function that calculates the sum of all numbers from 1 up to (and including) some number 'n'

// destructure console.log function, because, why not?
const { log } = console;

// Solution 1 has as many operations as the number of n since it is in a loop there by making the big O notation O(n)
const addUpTo_s1 = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

// Solution 2 has only 3 operations, no matter the size of n, therefore the big O notation is O(1)
const addUpTo_s2 = n => (n * (n + 1)) / 2;

const start = Date.now();
log(addUpTo_s2(1000000000));
const end = Date.now();
log(`Time Elapsed: ${(end - start) / 1000} seconds`);
