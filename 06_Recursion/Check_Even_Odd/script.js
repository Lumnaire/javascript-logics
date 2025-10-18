// Recursive JavaScript function to check if a number is even.
function is_even_recursion(number) {
    // If the number is negative, convert it to its absolute value.
    if (number < 0) {
        number = Math.abs(number);
    }

    // Base case: If the number is 0, it's even.
    if (number === 0) {
        return true;
    }

    // Base case: If the number is 1, it's odd.
    if (number === 1) {
        return false;
    } else {
        // Recursive case: Subtract 2 from the number and recursively check the new number.
        number = number - 2;
        return is_even_recursion(number);
    }
}

// Example usage: Check if certain numbers are even.
console.log(is_even_recursion(234)); // true
console.log(is_even_recursion(-45)); // false
console.log(is_even_recursion(65));  // false 
