
//create a function that excludes values from an array

const numbers=[1,2,3,4,1,1];

const output= except(numbers,[1,2,3,4]);

console.log (output);

function except(array, excluded){
//open up an array to place the allowed values
    const output=[];
    //for/of loop to sort through the array of numbers
    for (let element of array)
        //if statement that asks: is this element not in the excluded list. 
         //excluded.includes(element)=check if this element exists in the excluded array. !exclued.includes(elemten)=means the opposite of the initial code. So now true means false and vice versa.
         //if the element is not found in the excluded list, then run the next line.
        if (!excluded.includes(element))
//if it;s not excludeed push it into the output array
output.push(element);

    return output;


}