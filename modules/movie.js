const axios = require('axios'); 

let inMemory = {};


module.exports = getMovieHandler; 

function getMovieHandler(req,res){
    let selectedCity = req.query.locationQuery;
    const movieUrl=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${selectedCity}`
   
    if(inMemory[selectedCity] !== undefined) {
        console.log('we got the data from our server')
        res.send(inMemory[selectedCity]);
    } else {
    axios.get(movieUrl).then(accMovieData=>{
        const moviesArr=accMovieData.data.results.map(item=>
             new Movies(item));
             inMemory[selectedCity] = moviesArr

             res.status(200).send(moviesArr);
    })
    .catch(error=>{
        res.status(500).send(error)
    })
    }



}


class Movies{
    constructor(item){
        this.title=item.title;
        this.overview=item.overview;
        this.vote_average=item.vote_average;
        this.vote_count=item.vote_count;
        this.poster_path=`https://image.tmdb.org/t/p/w500${item.poster_path}`;
        this.popularity=item.popularity;
        this.release_date=item.release_date;

    }

}