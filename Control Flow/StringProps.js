
//show property names through a function without the value

const movie= {
title: 'a',
releaseYear: 2018,
rating: 4.5,
director: 'b'
};

showProperties(movie);

function showProperties(obj){
//the for/in the loop key only loop through the property names not the values
for (let key in obj){

    console.log(key)
}




}