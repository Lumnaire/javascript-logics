// Define a function 'round' that rounds a number 'n' to the specified number of 'decimals'
const round = (n, decimals = 0) =>
    // Convert 'n' to a string in scientific notation with the desired number of decimals
    Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// Test the 'round' function with different inputs
console.log(round(1.005, 2)); // Output: 1.01
console.log(round(1.05, 2));  // Output: 1.05
console.log(round(1.0005, 2)); // Output: 1
