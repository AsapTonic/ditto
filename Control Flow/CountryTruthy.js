//find which values in this array are turthy and count them

const array=[0, null, undefined, '', 2,3];

console.log (countTruthy(array));


function countTruthy(array){

    // let the count start at 0 on the array
    let count = 0;
    //for loop goes over the whole array
    for (let value of array)
        //if value is truthy (has value) count it
        if (value)
            count ++;
        return count;

    
}

// i have two real values in my array, 2 and 3.So the functioin will return : 2