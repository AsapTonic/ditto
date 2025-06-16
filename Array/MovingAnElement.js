
//move the first element in the array

const numbers= [1,2,3,4];
const output=move(numbers, 1,2);

console.log(output);
//index=the current position of the element. offset= how many steps to move forward or backwards.
function move(array, index, offset){

    const position=index + offset;


    if (position>= array.legnth || position<0){
console.error('Invalid offset.');
return;

    }
    //"...array"= makes a copy of the array to not change the original.
    const output=[...array];
    //removes the element from its place.
    const element= output.splice(index,1[0]);
    //inserts it into the new position.
    output.splice(position, 0, element);

    return output;



}