/**
 * @description Big O notation of built in JavaScript Object methods
 */
let person = {
  firstName: "Tolulope",
  lastName: "Odueke",
  isDeveloper: true,
  isFootballer: true,
  favoriteColors: ["black", "purple", "white"]
};

/**
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(1)
 */

const keys = Object.keys(person); // O(n) - The time taken increases as based on the size of the object
const values = Object.values(person); // O(n)
const entries = Object.entries(person); // O(n)
const hasProperty = person.hasOwnProperty("firstName"); // O(1)

const { log } = console; // Destructuring, because why not? 😎
log(hasProperty);
