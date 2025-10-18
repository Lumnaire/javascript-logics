// Recursive JavaScript function to calculate the factorial of a number.

function factorial(x) {
    // Base case: factorial of 0 is 1.
    if (x === 0) {
        return 1;
    }

    // Recursive case: x! = x * (x-1)!
    return x * factorial(x - 1);
}

// Example usage: Calculate and print the factorial of 5.
console.log(factorial(5));
