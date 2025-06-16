
//write a function called arrayFromRange using paremters min and max

//calling the arrayFromRange function 
const numbers= arrayFromRange (1,4);

console.log (numbers);
//my function takes two numbeers the min and max: 1,4, creates an array that stores the numbers from 1-4.
function arrayFromRange(min, max){
//make an empty array to hold the numbers between the min and max numbers
    const output=[];
//for loop set "i" as the min number  (1), as logn as i is less than the max number (4), keep going up by 1 each loop "++"
for (let i= min;i<=max;i++)
    //"output.push" adds my min numbers from each loop until it hits the max number into my array called "const output"
output.push(i);
//
return output;

}