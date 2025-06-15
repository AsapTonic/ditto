
//when we call a row with number, each row should show the stars in the console. Each row holding the same amount of stars as its numbered place.

showStars(5);

function showStars(rows){
//for loop starts at 1 and goes up each time until 5.
for (let row= 1; row<=rows; row++){
//this for loop builds the stars
//'_' is a placeholder for the *
    let pattern='';
for(let i=0; i<row; i++)
    //add "*" for every number
    pattern += '*';

console.log(pattern);

}


}