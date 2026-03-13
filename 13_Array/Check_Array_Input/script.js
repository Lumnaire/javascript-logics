// Function to check if the input is an array
var is_array = function (input) {
  // Using toString method to get the class of the input and checking if it is "[object Array]"
  if (toString.call(input) === "[object Array]")
    // Return true if the input is an array
    return true;
  // Return false if the input is not an array
  return false;
};

// Testing the function with a string
console.log(is_array("w3resource"));

// Testing the function with an array
console.log(is_array([1, 2, 4, 0]));
