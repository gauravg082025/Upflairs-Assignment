// function flatten(arr) {
//   return arr.reduce((acc, val) => 
//     Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
// }

// flatten([1, [2, [3, [4]], 5]]); // → [1, 2, 3, 4, 5]




// function removeDuplicates(arr) {
//   const result = [];
//   for (const num of arr) {
//     if (!result.includes(num)) {
//       result.push(num);
//     }
//   }
//   return result;
// }




// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a); // → [1, 2, 3, 4]




// function secondLargest(arr) {
//   let first = -Infinity, second = -Infinity;
//   for (const num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num !== first) {
//       second = num;
//     }
//   }
//   return second;
// }




// function countOccurrences(arr) {
//   const counts = {};
//   for (const num of arr) {
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   return counts;
// }
// // [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}




// Array.prototype.myMap = function(callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };




// arr.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return a.age - b.age;
// });




// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function filterPrimes(arr) {
//   return arr.filter(isPrime);
// }




// const arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr[0]); // → undefined



// // 11. 
// const a = [1, 2, 3];
// const b = a.slice(0, 2); // [1, 2]
// b[0] = 100;
// console.log(a); // → [1, 2, 3]



// function findPairs(arr, target) {
//   const seen = new Set();
//   const result = [];

//   for (const num of arr) {
//     const complement = target - num;
//     if (seen.has(complement)) {
//       result.push([complement, num]);
//     }
//     seen.add(num);
//   }
//   return result;
// }




// function chunkArray(arr, size) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }




// [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0); // → 10




// Worst-case: O(n)

// Why? Elements after the spliced index may need to be shifted left or right in the array, which involves moving potentially all subsequent elements.


