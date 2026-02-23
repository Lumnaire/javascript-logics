// Define a function named bin_to_dec that takes a binary string as input and converts it to decimal.
function bin_to_dec(bstr) {
  // Convert the binary string to a decimal integer using parseInt, removing any non-binary characters.
  return parseInt((bstr + "").replace(/[^01]/gi, ""), 2);
}

// Output the decimal conversion of the binary string '110011' to the console.
console.log(bin_to_dec("110011"));
// Output the decimal conversion of the binary string '100' to the console.
console.log(bin_to_dec("100"));
