'use strict';
// const weatherData = require('./data/weather.json');

const express = require("express");
const cors = require('cors');
require('dotenv').config();
const axios = require('axios')

const server = express();
const PORT = process.env.PORT;

server.use(cors());

//  Routes

server.get('/test', testHandler)
server.get('/weather', getWeatherHandler);

// // Function Handlers


function testHandler(req, res) {
    res.status(200).send('my server is working');
}










// http://localhost:3001/weather?locationQuery=Seattle&&lon=-122.33207&&lat=47.60621
// http://localhost:3001/weather?locationQuery=Amman
// https://api.weatherbit.io/v2.0/forecast/daily?locationQuery=Raleigh,NC&key=ba29d058a8694bb4b92fcaf625391e1b

function getWeatherHandler(req, res) {
    let selectedCity = req.query.locationQuery;
    
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${selectedCity}&key=${process.env.WEATHER_API_KEY}`
    
        console.log('hiii');
    
     axios.get(url).then(accWeatherData=>{
        // console.log(accWeatherData.data);
        res.send(accWeatherData.data.data.map((item) =>{
            return new ForeCast(item.valid_date,item.weather.description)}))
            

     })
       
      
        .catch(error=>{
            res.status(500).send(error)
        })
   



}



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

server.get('*', (req, res) => {
    res.status(404).send('NOT FOUND')
})



class ForeCast {
    constructor(date, description) {
        this.date = date;
        this.description = description;
        // this.city_name=weathInfo.city_name
    }
};



server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})




