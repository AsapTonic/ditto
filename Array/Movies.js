

//get all the movies in 2018, with rating greater than 4
//sort them by their rating
//in descending order
//only pick their title

const movies=[
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
    
    
];

function listMovies(){

    //for/ of loop to go through my array
    
    for(let movie of movies)
        //log the movie titles from the array on the console
        console.log(movie.title);
        
}
//calls the function
listMovies();