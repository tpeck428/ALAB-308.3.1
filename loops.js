//Part 1: Fizz Buzz
//a. Loop through all number from 1 - 100

// for (let i = 1; i <= 100; i++) {
//          console.log(i)
//     }

//b. if a number is divisible by 3, log "Fizz"

// for (let i = 1; i <= 100; i++){
//     console.log(i); 
//     if (i %3 === 0) {
//     console.log("Fizz");
//     }
// }

//c. if a number is divisible by 5, log "Buzz"
// for (let i = 1; i <= 100; i++){
//     console.log(i); 
//     if (i % 5 === 0) {
//     console.log("Buzz");
//     }
// }

//d. If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// for (let i = 1; i <= 100; i++){
//     console.log(i); 
//     if (i %3 === 0 && i %5 === 0) {
//     console.log("Fizz Buzz");
//     }
// }

//e. If a number is not divisible by either 3 and 5, log the number.
// for (let i = 1; i <= 100; i++){
//     console.log(i); 
//     if (i %3 !== 0 && i %5 !== 0) {
//     console.log('I am not divisible');
//     }
// }

// Part 2: Prime Time

// Create a loop that searches for the next prime number, starting at n and incrementing from there.
//As soon as you find the prime number, log that number and exit the loop.

let num = 12;
let count = 0;
let foundPrime = false;
while (!foundPrime) {
    console.log(num++);
    count++;
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        console.log(num + " is prime");
        foundPrime = true;
    }
}

