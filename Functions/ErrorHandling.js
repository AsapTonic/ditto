//allow the countOccurence function to return booleans and NUlls. Let the function make exceptions for them.

//const numbers=[1,1,2,3,4];
try{
const count= countOccurences(null,1 );
const numbers= [1,2,3,4];
console.log(count);
}
catch (e) {
console.log(e.message);

}

function countOccurences(array, searchElement){
   if(! Array.is (array))
    throw new Error('Invalid array.');

//     let count=0;
//     for (let element of array)
//         if (element===searchElement)
//             count ++;

// return count;

return array.reduce((accumulator, current)=>{
    const occurence= (current===searchElement)
    console.log (accumulator, current, searchElement);
        return accumulator + occurence;

    
}, 0);

}