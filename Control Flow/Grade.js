

//calculate the grades of a student

// Average grade from array is 70, so it should be C

// const marks= [ 90, 90, 99];


// console.log(calculatedGrade(marks));
// function calculatedGrade(marks){
// const average = calculateAverage(marks);

// //grading rules based off of average score

// //if ( average>=0 && average <=59) return 'F';
// if (average<60) return 'F';
// //if (average >59 && average <70) return 'D';
// if(average<70) return 'D'
// //if (average=>70 && average<=79) return 'C';
// if (average<80) return 'C';
// //if (average >=80 && average<=89) return 'B';
// if (average<90) return 'B';
// //if (average>=90 && average<=100) return 'A';
// return 'A';
// }

// function calculateAverage(array){

// let sum= 0;
// for (let value of array)
// sum += value;

// return sum /array.length ;
// }


//if average is greater or equal to 70, return "Pass", otherwise "Fail"

// const scores=[60,80,90];
// console.log(calculatePassFail(scores));

// function calculatePassFail(scores){
// const average= calculateAverage(scores);


// if(average <=69) return 'Fail';
// //if (average>=70) return 'Pass';
// else 
// return 'Pass';


// }

// function calculateAverage(array){

//     let sum=0;
//     for( let value of array)
//     sum += value;
//     return sum/array.length;
// }


//count how many scores are below 60
const scores=[45,77,90,59,38,100];
console.log (countingFailingScored(scores));

//create a function that uses the array numbers
function countingFailingScored(array){
//create the for/of loop to go through each value, going up by 1 each loop until the array is finished.
let count=0;
for (let score of array)
    //if value is less than 60
    if (score<60){
        //"count"= count the number if it is less than 60
count ++;
    }


return count;
}
//should return 3