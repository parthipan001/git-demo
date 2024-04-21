//Print odd numbers in an array using anonymous function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumbers);

