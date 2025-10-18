// Function to calculate the sum of elements in an array using recursion.
function arraySumRecursive(arr, index = 0) {
    // Base case: if the index exceeds the array length, return 0.
    if (index >= arr.length) {
        return 0;
    } else {
        // Recursive case: add the current element to the sum of the rest of the array.
        return arr[index] + arraySumRecursive(arr, index + 1);
    }
}

// Example usage: Calculate and print the sum of elements in the array [1, 2, 3, 4, 5, 6].
console.log(arraySumRecursive([1, 2, 3, 4, 5, 6])); 
