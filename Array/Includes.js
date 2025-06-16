
//write a function that checks to see if a element exists within an array.
//create a function that takes an array and search element. The searchElement should return true or false.


//this first method is the simpler method from the Finding Elements videos.
//create my array
const numbers=[1,2,3,4];

//".includes" is method that is used to check if something exists inside something, in this case its an array.
console.log(numbers.includes(-1));
//
function includes(array, searchElements){

console.log(numbers.indexOf(1));

}


//Mosh solution:

const numbers= [1,2,3,4];
//(includes(numbers,1))= means does this array include the number 1?
console.log(includes(numbers,1));
//create a function with the parameters of the array from above and the number we're searching for. It translates into the console.log above.
function includes(array, searchElement){

//for/of loops through every number in the array
    for (let element of array)
        //if any item in the array matches the search return true, else return false.
        if (element===searchElement)
            return true;
        return false;
}



