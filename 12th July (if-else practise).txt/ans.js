//const prompt=require('prompt-sync')()
// 1. Even or Odd Checker
// Write a Node.js script that takes a number as input and determines whether the number is even or odd using if-else.

// let a=6;
// if(a%2==0){
//     console.log("The number is even ")
// }else if (a%2!=0){
//     console.log("The number is odd")
// }


//2. Positive, Negative, or Zero
// Ask the user to input a number. Use if-else conditions to display whether the number is positive, negative, or zero.


// let input = prompt("Enter a number:");
// let num = Number(input);
// if (isNaN(num)) {
//     console.log("That's not a valid number.");
// } else {
//     if (num > 0) {
//         console.log("The number is positive.");
//     } else if (num < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// 3. Age-based Eligibility
// Prompt the user to enter their age. Use if-else to check if the person is eligible to vote (18 or older). Display a suitable message.

// let input = prompt("Enter Your Age");
// let age = Number(input);
// if(isNaN(age)){
//     console.log("Not a Valid Age");
// }else{
//     if(age < "18"){
//         console.log("You are not eligible");
//     }else{
//         console.log("You are elible");
//     }
// }


// 4. Number Range Validator
// Ask the user to input a number. Use if-else to check whether the number lies within the range 10 to 20, inclusive. Display "In range" or "Out of range".

// let input = prompt("Enter a number");
// let num = Number(input);
// if(isNaN(num)){
//     console.log("Not a Valid Number");
// }else{
//     if(num>="10" && num<="20"){
//         console.log("In Range");
//     }else{
//         console.log("Out of range")
//     }
// }

// 5. Check Number Equality
// Take two numbers from the user. Use if-else to check if both numbers are equal or not. If they are not equal, indicate which one is larger.

// let input1 = prompt("Enter Number 1");
// let input2 = prompt("Enter Number 2");
// let num1 = Number(input1);
// let num2 = Number(input2);
// if(isNaN(num1 & num2)){
//     console.log("Not a Valid Number");
// }else{
//     if(num1==num2){
//         console.log("Number 1 and Number 2 are equal" );
//     }else if(num1>num2){
//         console.log(`Number 1 is greater than Number 2 and it is : ${num1}`)
//     }else if(num1<num2){
//         console.log("Number 2 is Greater than Number 1 and it is : " , (num2) )
//     }
// }

// 6. Simple Grading System
// Write a program that takes a score (0–100) as input and assigns a grade based on the following:
// 90 and above → Grade A

// 75–89 → Grade B

// 50–74 → Grade C

// Below 50 → Fail

// Use nested or chained if-else statements.

// let input = prompt("Enter Score");
// let num = Number(input);
// if(isNaN(num)){
//     console.log("Not a Valid Number");
// }else{
//     if(num>= "90"){
//         console.log("Grade A and Score is ",(num) );
//     }else if(num>=75 && num<=89){
//         console.log("Grade B and Score is ", (num));
//     }else if(num>=50 && num<=74){
//         console.log("Grade C and Score is ", (num));
//     }else if(num<50){
//         console.log("Fail")
//         }
// }

// 7. Divisibility Checker (5 and 11)
// Prompt the user to input a number. Use if-else to check if it is divisible by both 5 and 11. Show a message based on the result.

// let input = prompt("Enter a Number");
// let num = Number(input);
// if(isNaN(num)){
//     console.log("Not a Valid Number");
// }else{
//     if(num%5=="0" && num%11=="0"){
//         console.log("The Number You Put is divisible by both 5 and 11");
//     }else if(num%5=="0" && num%11!="0") {
//         console.log("The Number is Divisible by 5 but not divisible by 11")
//     }else if(num%5!="0" && num%11=="0") {
//         console.log("The Number is Divisible by 11 but not divisible by 5")
//     }
// }

// 8. Find the Largest of Three Numbers
// Take three numbers as input. Use multiple if-else statements to find and print the largest number among them.

// let input1 = prompt("Enter Number 1");
// let input2 = prompt("Enter Number 2");
// let input3 = prompt("Enter Number 3");
// let num1 = Number(input1);
// let num2 = Number(input2);
// let num3 = Number(input3);

// if(isNaN(num1 || num2 || num2)){
//     console.log("Not a Valid Number");
// }else{
//     if(num1>=num2 && num1>=num3 ){
//         console.log("Number 1 is greatest and it is ", (num1) );
//     }else if(num2>=num3 && num2>=num3){
//         console.log( "Number 2 is greatest and it is ", (num2) )
//     }else if(num3>=num2 && num3>=num1){
//         console.log( "Number 3 is greatest and it is " ,(num3))
//     }
// }

// 9. Leap Year Validator
// Ask the user to enter a year. Use conditions to check whether it is a leap year or not, using the correct logic:

// Leap year if divisible by 4, but not by 100, unless also divisible by 400.

// let input = prompt("Enter a Year");
// let num = Number(input);
// if(isNaN(num) || !Number.isInteger(num) || num<="0"){
//     console.log("Please enter a valid year");
// }else{
//     if( num%400==="0" || (num%4==="0" && num%100!=="0")){
//         console.log("The Year is a Leap Year");
//     }else{
//             console.log("The year is not a leap year");
//         }
// }


// 10. Vowel or Consonant
// Take a single alphabet character as input from the user. Use if-else to check whether it's a vowel (a, e, i, o, u) or consonant.

let char = prompt("Enter a single alphabet character:");
char = char.toLowerCase();
if (char.length === 1 && char.match(/[a-z]/)) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(char + " is a vowel.");
    } else {
        console.log(char + " is a consonant.");
    }
} else {
    console.log("Invalid input. Please enter a single alphabet character.");
}