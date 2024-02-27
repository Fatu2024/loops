// Accomplish the following:
// Loop through all numbers from 1 to 100.
// for (let i = 0; i <= 100; i++){
//     console.log(i);
// }
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// for (let i = 1; i <= 100; i++) {
//     if (i %3 === 0 && i %5 === 0) {
//         console.log('fizz buzz');
//     } else if (i %3 === 0) {
//         console.log('fizz');
//     }else if (i %5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(i)
//     }
// }

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

// let num = 6;
//     let count = 0;
//     let foundPrime = false;
//     while (!foundPrime) {
//         console.log(num++);
//         count++;
//         let isPrime = true;
//         for (let i = 2; i <= num / 2; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime && num > 1) {
//             console.log(num + " is prime");
//             foundPrime = true;
//         }
//     }

//Part 3:
// let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// let rows = data.split("\n");
// console.log(rows);

let data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n10.00,0.050,0.050\n20.49,0.066,0.066\n30.98,0.087,0.080\n41.47,0.116,0.108\n51.96,0.142,0.138\n62.45,0.166,0.158\n72.94,0.193,0.174\n83.43,0.204,0.192\n93.92,0.226,0.205\n104.41,0.238,0.232"
let rows = data.split("\n");
console.log(rows);