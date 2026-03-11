// Define a function named rand that generates a random integer between the specified minimum and maximum values.
rand = function (min, max) {
  // If both minimum and maximum values are not provided, return 0.
  if (min == null && max == null) return 0;

  // If only one value is provided, treat it as the maximum and set minimum to 0.
  if (max == null) {
    max = min;
    min = 0;
  }
  // Generate a random integer between min (inclusive) and max (inclusive).
  return min + Math.floor(Math.random() * (max - min + 1));
};

// Output a random integer between 20 and 1 (inclusive) to the console.
console.log(rand(20, 1));
// Output a random integer between 1 and 10 (inclusive) to the console.
console.log(rand(1, 10));
// Output a random integer between 6 and 0 (inclusive) to the console.
console.log(rand(6));
// Output a random integer between 0 and 0 (inclusive) to the console.
console.log(rand());
