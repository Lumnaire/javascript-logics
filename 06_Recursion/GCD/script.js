// Function to calculate the greatest common divisor (GCD) of two numbers using Euclidean algorithm.
var gcd = function (a, b) {
    // Base case: if b is 0, then GCD is a.
    if (!b) {
        return a;
    }

    // Recursive case: calculate GCD using the remainder (a % b).
    return gcd(b, a % b);
};

// Example usage: Calculate and print the GCD of 2154 and 458.
console.log(gcd(2154, 458)); 
