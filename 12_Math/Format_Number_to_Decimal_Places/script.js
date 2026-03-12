// Define a function named decimals that takes two parameters: n (number) and d (number of decimal places).
function decimals(n, d) {
  // Check if both n and d are of type number, otherwise return false.
  if (typeof n !== "number" || typeof d !== "number") return false;
  // Convert n to a floating-point number, defaulting to 0 if conversion fails.
  n = parseFloat(n) || 0;
  // Return the number n formatted to have d decimal places using the toFixed method.
  return n.toFixed(d);
}

// Output the result of formatting the number 2.100212 with 2 decimal places to the console.
console.log(decimals(2.100212, 2));
// Output the result of formatting the number 2.100212 with 3 decimal places to the console.
console.log(decimals(2.100212, 3));
// Output the result of formatting the number 2100 with 2 decimal places to the console.
console.log(decimals(2100, 2));
