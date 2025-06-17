//allow the countOccurence function to return booleans and NUlls. Let the function make exceptions for them.

//const numbers=[1,1,2,3,4];

//
try{
const count= countOccurences(null,1 );
const numbers= [1,2,3,4];
console.log(count);
}
//error object that prints the "if statements" "Invalid array."
catch (e) {
console.log(e.message);

}

function countOccurences(array, searchElement){
    //this if statement makes sure that the iput is a valid array. if not it returns false
   if(! Array.is (array))
    //if not an array it gets the invalid message
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