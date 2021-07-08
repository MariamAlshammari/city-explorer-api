'use strict';
// const weatherData = require('./data/weather.json');

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const getMovieHandler=require('./modules/movie.js')
const getWeatherHandler=require('./modules/weather.js')

const PORT = process.env.PORT;
const server = express();

server.use(cors());


// server.get('/test', testHandler)
server.get('/weather', getWeatherHandler);
server.get('/movies',getMovieHandler);


server.get('/', (req, res) => {
    res.send('home route')
})


server.get('*', (req, res) => {
    res.status(404).send('NOT FOUND')
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})






















// // Function Handlers


// function testHandler(req, res) {
//     res.status(200).send('my server is working');
// }





// http://localhost:3001/weather?locationQuery=Seattle&&lon=-122.33207&&lat=47.60621
// http://localhost:3001/weather?locationQuery=Amman
// https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=ba29d058a8694bb4b92fcaf625391e1b

// function getWeatherHandler(req, res) {
//     let selectedCity = req.query.locationQuery;
    
//     let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${selectedCity}&key=${process.env.WEATHER_API_KEY}`
    
//         console.log('hiii');
    
//      axios.get(url).then(accWeatherData=>{
//         // console.log(accWeatherData.data);
//         res.send(accWeatherData.data.data.map((item) =>{
//             return new ForeCast(item.valid_date,item.weather.description)}))
            

//      })
     
     
//      .catch(error=>{
//          res.status(500).send(error)
//         })    
        
        
        
        
//     }        


    // http://localhost:3001/movies?locationQuery=Amman
    // https://api.themoviedb.org/3/movie/550?api_key=3c6d77dab925ca8820b504bac3054a4e


// function getMovieHandler(req,res){
//     let selectedCity = req.query.locationQuery;
//     let movieUrl=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${selectedCity}`
//     axios.get(movieUrl).then(accMovieData=>{
//         res.send(accMovieData.data.results.map((item)=>{
//             return new Movies(item)}))
//     })
//     .catch(error=>{
//         res.status(500).send(error)
//     })




// }
    
    
    
    // class ForeCast {
    //     constructor(date, description) {
    //         this.date = date;
    //         this.description = description;
    //         // this.city_name=weathInfo.city_name
    //     }
    // };
    
    
    



// class Movies{
//     constructor(item){
//         this.title=item.title;
//         this.overView=item.overView;
//         this.vote_average=item.vote_average;
//         this.vote_count=item.vote_count;
//         this.poster_path=`https://image.tmdb.org/t/p/w500${item.poster_path}`;
//         this.popularity=item.popularity;
//         this.release_date=item.release_date;

//     }

// }



    




















    
    // console.log(req.query);
    
    //     let findWeather=()=>{
        //         try{
            // let selectedCity = weatherData.find (city =>{        
//     if(city.city_name== req.query.locationQuery && city.lon==req.query.lon && city.lat== req.query.lat) {
//         return city    
//     }

// }) 
//     // res.status(200).send(selectedCity); 
// //    { console.log(selectedCity);}
//  const cityWeatherProp=selectedCity.data.map(item=>{
//      // console.log(cityWeatherProp);    
//      return new ForeCast(item.valid_date,item.weather.description);

//  })
// //  console.log(cityWeatherProp);
// res.json( findWeather())

//  res.status(200).send(cityWeatherProp); 
// }
//  catch(err){
//     res.status(500)    
//     res.send(err.message)


//     }



//     }



