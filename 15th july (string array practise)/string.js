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



//  **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`

function countVowels(JavaScript){
loweStr= str.toLowerCase();
vowels = 'aeiou';
let count=0;
for(let char of loweStr){
if(str.includes(char)){
    count++;
}
}console.log(count)
}
