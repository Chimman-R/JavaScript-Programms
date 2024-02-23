const arraySum = arr => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

// Example usage:
const numbers = [4, 2, 3, 2, 5];
console.log("Sum of numbers:", arraySum(numbers)); 
