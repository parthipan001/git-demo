//Print odd numbers in an array using anonymous function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumbers);

//Convert All Strings to Title Caps in a String Array

var str_title = function() {
    const strings = ["hello world", "javascript is fun", "coding time"];
    const titleCaps = strings.map(str => 
        str.replace(/\b\w/g, char => char.toUpperCase())
    );

    return titleCaps;
}

console.log(str_title());

//Sum of all numbers in an array

var total_sum = function() {
    const numbers = [10, 20, 30, 40];
    const totalSum = numbers.reduce((sum, num) => sum + num, 0);
    return totalSum
}

console.log("Sum of numbers:", total_sum());

//Return all the prime numbers in an array
var isPrime = function(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

var num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
var primes = num.filter(isPrime);

console.log("Prime numbers:", primes);

//Return all the palindromes in an array

var isPalindrome = function(str) {
    return str === str.split('').reverse().join(''); 
}

const words = ["level", "deified", "hello", "world", "madam"];
const palindromes = words.filter(isPalindrome); 
console.log("Palindromes:", palindromes);

//Return median of two sorted arrays of the same size

var combine = function () {
    var arr1 = [1, 3, 5];
    var arr2 = [2, 4, 6];
    var combined = [...arr1, ...arr2].sort((a, b) => a - b);

    const findMedian = arr => {
        const len = arr.length;
        if (len % 2 === 0) {
            return (arr[Math.floor((len - 1) / 2)] + arr[Math.floor(len / 2)]) / 2;
        } else {
            return arr[Math.floor(len / 2)];
        }
    };

    return findMedian(combined);
}

const median = combine(); 
console.log("Median:", median);

//Remove duplicates from an array

var uniqueArr = function(arr1){
  
    var new_arr = [...new Set(arr1)]
    return new_arr;
  }
  
    var arr = [1, 2, 3, 1, 4, 2, 5, 3];
    console.log(uniqueArr(arr));


//Rotate an array by k times

var rotateArray = function(arr, k) {
    const len = arr.length;
    const rotation = k % len;  
    return arr.slice(-rotation).concat(arr.slice(0, -rotation)); 
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log("Rotated array:", rotateArray(arr, k));  

//IIFE functions

//Print odd numbers in an array using anonymous function

(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    console.log("Odd numbers:", oddNumbers); 
})();

//Convert All Strings to Title Caps in a String Array

(function() {
    const strings = ["hello world", "javascript is fun", "coding time"];
    const titleCaps = strings.map(str => 
        str.replace(/\b\w/g, char => char.toUpperCase())
    );
    console.log("Title caps:", titleCaps);  
})();

//Sum of All Numbers in an Array

(function() {
    const numbers = [10, 20, 30, 40];
    const totalSum = numbers.reduce((sum, num) => sum + num, 0);
    console.log("Sum of numbers:", totalSum);  
})();

//Return All the Prime Numbers in an Array

(function() {
    const isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
    const primes = numbers.filter(isPrime);
    console.log("Prime numbers:", primes);  
})();

//Return All the Palindromes in an Array

(function() {
    const isPalindrome = str => str === str.split('').reverse().join('');
    
    const words = ["level", "deified", "hello", "world", "madam"];
    const palindromes = words.filter(isPalindrome);
    console.log("Palindromes:", palindromes);
})();

//Return Median of Two Sorted Arrays of the Same Size

(function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const combined = [...arr1, ...arr2].sort((a, b) => a - b);

    const findMedian = arr => {
        const len = arr.length;
        if (len % 2 === 0) {
            return (arr[Math.floor((len - 1) / 2)] + arr[Math.floor(len / 2)]) / 2;
        } else {
            return arr[Math.floor(len / 2)];
        }
    };

    const median = findMedian(combined);
    console.log("Median:", median);
})();

//Remove Duplicates from an Array

(function() {
    const arr = [1, 2, 3, 1, 4, 2, 5, 3];
    const uniqueArr = [...new Set(arr)];
    console.log("Unique array:", uniqueArr); 
})();

// Rotate an Array by K Times

(function() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;

    const rotateArray = (arr, k) => {
        const len = arr.length;
        const rotation = k % len;  // Handle cases where k > len
        return arr.slice(-rotation).concat(arr.slice(0, -rotation));
    };

    const rotatedArr = rotateArray(arr, k);
    console.log("Rotated array:", rotatedArr);  // [5, 6, 7, 1, 2, 3, 4]
})();

