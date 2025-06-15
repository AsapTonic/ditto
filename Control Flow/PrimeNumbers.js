

//create a function that shows all the prime numbers up the given limit.

//tells my showPrimes function to go up to 20. "20"="limit"
showPrimes(20);

//Prime numbers are 2,3,5,7,11,13,17,19

function showPrimes (limit){
//outer loop: starts the number checker at 2 since its the first prime number and goes up to the limit of 20.
    for(let number=2; number<=limit;number++){

        let isPrime= true;
//inner loop: used to declare if the numbers are divisible bby more than 1 and itself. If it is it is not a prime number.
for (let factor=2; factor<number; factor ++){
if (number % factor ===0){
        isPrime= false;
        break;
    }
}
if (isPrime) console.log(number);
    }
}