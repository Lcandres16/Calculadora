function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return arr.length > 0 ? sum / arr.length : "The array must contain numbers and not be empty.";
}

// Usage example:
const numbers = [5, 10, 15, 20];
const average = calculateAverage(numbers);
console.log(`The average is: ${average}`);
