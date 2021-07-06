'use strict';

const express=require('express');


require('dotenv').config(); 
const cors = require('cors');

const weatherData = require('./data/weather.json');

const server=express();


const PORT = process.env.PORT;
server.use(cors());


server.get('/',(req,res)=>{
    // res.status(200).send(weatherData)
    res.status(200).send('home route')
    


})


server.get('/test',(request,response)=>{
    response.status(200).send('my server is working')
})
 
// http://localhost:3001/weather?locationQuery=Seattle&&lon=-122.33207&&lat=47.60621
server.get('/weather',(req,res)=>{
    // console.log(req.query);
    try{
    let selectedCity = weatherData.find (city =>{
        if(city.city_name== req.query.locationQuery && city.lon==req.query.lon && city.lat== req.query.lat) {
            return city
        }
        
    }) 
        // res.status(200).send(selectedCity); 
    //    { console.log(selectedCity);}
     const cityWeatherProp=selectedCity.data.map(item=>{
         // console.log(cityWeatherProp);
         return new ForeCast(item.valid_date,item.weather.description);
 
     })
    //  console.log(cityWeatherProp);

     res.status(200).send(cityWeatherProp); }
     catch(err){
        res.status(500)
        res.send(err.message)

        
        }
 
        
    
})

server.get('*',(req,res)=>{
    res.status(404).send('NOT FOUND')
})



class ForeCast {
    constructor(date,description){
     this.date=date;
     this.description=description;
     // this.city_name=weathInfo.city_name
   }
 };






server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})