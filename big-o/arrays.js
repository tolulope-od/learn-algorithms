/**
 * @description Big O notation of built in JavaScript Array methods
 */

const namesArr = ["Johnson", "Beck", "Sola", "Todimu"];

/**
 * Insertion - Depends
 * Removal - Depends
 * Searching - O(n)
 * Access - O(1)
 */

const sola = namesArr[2]; // O(1) - Constant time to access an item in an array

// Insertion (or removal) into the end of an array
namesArr.pop();
namesArr.push("Bon Iver"); // O(1) - Constant time

// Insertion (or removal) into the front of an array is O(n) because the indices have to be re indexed
namesArr.unshift("Kanye West");

// Adding two arrays togther
const otherNames = ["Beckham", "Star Lord", "Robocop", "John Wick", "Drax"];
namesArr.concat(otherNames); // O(n) The time takes increases depending on the length of the array being added

// Change contents of an array by removing existing elements and adding new elements
namesArr.splice(1, 1, "Kid Cudi"); // O(n) replaces one element at the first index
