// 🔁 1. Loop Basics
// Print numbers from 1 to 10 using a for loop.

// Print numbers from 10 down to 1 using a while loop.

// Print numbers from 1 to 5 using a do...while loop.

                // for(let i=1; i<=10;i++){
                //     console.log(i)
                // }

                // let i=10;
                // while(i>=1){
                //     console.log(i);
                //     i--;
                // }

                // let i=1;
                // do{
                //     console.log(i);
                //     i++
                // }
                //     while(i<=5);

// 🔁 2. Even, Odd, Multiples
// Print all even numbers from 1 to 50.

// Print all odd numbers between 20 and 50.

// Print all numbers divisible by 3 from 1 to 30.


            // for(let i=2 ; i<=50 ; i+=2){
            //     console.log(i);
            // }


            // for(let i=21 ;(i>=21) && (i<50) ;i+=2 ){
            //     console.log(i)
            // }

            // for(i=3 ; i<=30 ; i+=3){
            //     console.log(i)
            // }



// ➕ 3. Summation & Product
// Find the sum of numbers from 1 to 100.

// Find the product of numbers from 1 to 10.

// Find the sum of all even numbers between 1 and 50.

// Find the sum of squares of numbers from 1 to 10.
// (i.e., 1² + 2² + ... + 10²)

                // let sum=0;
                // for(i=1;i<=100;i++){
                //     sum+=i;
                // }
                // console.log(sum);

                // let product=1;
                // for(i=1;i<=10;i++){
                //     product*=i
                // }
                // console.log(product);

                // let sum=0;
                // for(i=0;i<=50;i+=2){
                //     sum+=i;
                // }
                // console.log(sum)

                // let sum=0;
                // for(i=0;i<=10;i++){
                //     sum+=i**2;
                //     }
                //     console.log(sum);



// 🧠 4. Conditionals Inside Loops
// Print numbers from 1 to 20, skip multiples of 4 using continue.

// Print numbers from 1 to 10, stop at 7 using break.

// Count how many numbers between 1 and 100 are divisible by both 3 and 5.


            // for(i=1;i<=20;i++){
            //     if(i%4===0){
            //         continue;
            //     }
            // console.log(i);
            // }

            // for(i=1;i<=10;i++){
            //     if(i==8){
            //         break;
            //     }
            //     console.log(i)
            // }

            // let count=0;
            // for(i=1;i<=100;i++){
            //     if(i%3===0 && i%5===0){
            //         count++;
            //     }
            // }
            // console.log(`count of no. ${count}`);



// 🔂 5. Nested Loops (Without Patterns)
// Print all pairs (i, j) where i and j go from 1 to 3.

// Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).

            // for(i=1;i<=3;i++){
            //     for(j=1;j<=3;j++){
            //         console.log(`${i},${j}`);
            //     }
            // }

            // for(a=1;a<=4;a++){
            //     for(b=1;b<=4;b++){
            //         if(a+b===5){
            //         console.log(`${a},${b}`)
            //      }
            //     }
            // }



//             🧮 6. Logic-Based Tasks
// Check if a given number is a prime number using a loop.

// Print the factorial of a number (e.g., 6! = 720).

// Print the reverse of a number using a loop (e.g., 123 → 321).

// Count the number of digits in a given number using a loop.

// Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.

// let number=6;
// let factorial=1;
// for(i=1 ; i<=number ; i++){
//     factorial*=i;
// }
// console.log(factorial);

// let number=2345;
// for(i=0;i<=number;i++){
    // console.log(number.length)
// }