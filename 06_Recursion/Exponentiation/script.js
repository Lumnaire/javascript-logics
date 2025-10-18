// Recursive JavaScript function to calculate the exponent (a^n).
function exponent(base, power) {
    if (power === 0) {
        return 1;
    } else if (power % 2 === 0) {
        // If the power is even, use the formula (a^(n/2))^2.
        let temp = exponent(base, power / 2);
        return temp * temp;
    } else {
        // If the power is odd, use the formula a * a^(n-1).
        return base * exponent(base, power - 1);
    }
}

// Example usage: Calculate and print the exponentiation of 4^2.
console.log(exponent(4, 2));
