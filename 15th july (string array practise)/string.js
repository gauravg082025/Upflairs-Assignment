// 1. **Reverse a String**  
//    Write a function `reverseString(str)` that takes a string and returns it reversed.  
//    Example: `"hello" → "olleh"`

// let str="hello";
// console.log(str.split('').reverse().join(''))


// 2. **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`

// let str="Madam";
// console.log(str.toUpperCase(str).split('').reverse().join(''))



//  3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`


// function countVowels(str) {
//     const vowels = 'aeiou';
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) count++;
//     }
//     return count;
// }
// console.log(countVowels("Javascript"));



// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`


// function capitalizeWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 0) {
//             words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//         }
//     }
//     return words.join(' ');
// }
// console.log(capitalizeWords("hello world")); 




// 5. **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`


// function charFrequency(str) {
//     const freq = {};
//     for (let char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
// }
// console.log(charFrequency("aabbbc"));



// 🧠 ARRAY QUESTIONS (5)

// 1. **Remove Duplicates**  
//    Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`


// function removeDuplicates(arr) {
//     const unique = [];
//     for (let el of arr) {
//         if (!unique.includes(el)) {
//             unique.push(el);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// 2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`

// function flattenArray(arr) {
//     const flattened = [];
//     for (let subArr of arr) {
//         for (let el of subArr) {
//             flattened.push(el);
//         }
//     }
//     return flattened;
// }
// console.log(flattenArray([[1, 2], [3, 4], [5]]));


// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`

// function findMaxMin(arr) {
//     if (arr.length === 0) return null;

//     let max = arr[0];
//     let min = arr[0];

//     for (let num of arr) {
//         if (num > max) max = num;
//         if (num < min) min = num;
//     }
//     return { max, min };
// }
// console.log(findMaxMin([4, 1, 9, -2]));


// 4. **Sum of Even Numbers**  
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`

// function sumEven(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         if (num % 2 === 0) sum += num;
//     }
//     return sum;
// }
// console.log(sumEven([1, 2, 3, 4, 5, 6]));


// 5. **Group by Type**  
//    Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`

// function groupByType(arr) {
//     const grouped = {};
//     for (let el of arr) {
//         const type = typeof el;
//         if (!grouped[type]) {
//             grouped[type] = [];
//         }
//         grouped[type].push(el);
//     }
//     return grouped;
// }
// console.log(groupByType([1, 'a', true, 2, 'b']));