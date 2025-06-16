// //create a function called countOccurances that takes an array and search element and turns the number of times that search element has occured in the array.


const numbers=[1,1,2,3,4];

const count= countOccurences(numbers,1 );

console.log(count);

function countOccurences(array, searchElement){

//     let count=0;
//     for (let element of array)
//         if (element===searchElement)
//             count ++;

// return count;

array.reduce((accumulator, current)=>{
    const occurence= (current===searchElement)
    console.log (accumulator, current, searchElement);
        return accumulator + occurence;

    
}, 0);

}



// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10
