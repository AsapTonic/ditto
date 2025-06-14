

//return the sum of all the mutliples of 4 and 6

// console.log (sum(20));

// function sum (limit){
// let sum= 0;

// for (let i=0; i<=limit;i++)

//     if(i%4===0 || i%6===0){

//     sum += i;}

// return sum 


// }

//create a function with the limit value of 10
console.log(sumEvenNumber(10));
//define the function, the limit tells the function how far to count. in this case its 10
function sumEvenNumber(limit){
//sum set to 0 keeps track of the total
    let sum=0;
// the for loop starts at 0 and goes until it hits the limit of 10. "i++" means go up 1 each time.

    for (let i=0; i<=limit;i++)
        if (i%2===0){
//if number is even add it to the total
//sum +=i : sum= sum + i
            sum += i;

        }
return sum




}