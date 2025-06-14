
//if a number is divisible by 3 print fizz
//if a number is divisible by 5 print Buzz
//if a number is divisible by both 3 and 5 print fizzBuzz


const output= fizzBuzz(10);
console.log(output);

//define "i" within the paramaters of the function
function fizzBuzz(i){

if (i%3===0 && i%5===0)
    return "fizzBuzz";

if (i%3===0)
    return "fizz";

if (i%5===0)
    return "Buzz";

return i;
}