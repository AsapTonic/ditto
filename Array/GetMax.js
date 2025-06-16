
//create a function that returns the largest number in an array

//my answer:

// const numbers= [1,2,3,4];

// const max= getMax(numbers);

// console.log(max);

// function getMax(array){
// let max= array[0]
//     for (let number  of array)

//  if (numbers>max)
//         return max;
//     else return undefined;


// }


//Mosh Answer:

 const numbers= [1,2,3,4];

const max= getMax([1,2,3]);

console.log(max);

function getMax(array){
if(array.lenth===0) return undefined;


// let max=array[0];
// for(let i=1; i<array.length; i++)
//     if(array[i]>max)
//         max=array[i];
//     return max;
array.reduce((a, b)=> (a>b) ? a : b);
};


