const axios = require('axios'); 
module.exports = getWeatherHandler; 


function getWeatherHandler(req, res) {
    let selectedCity = req.query.locationQuery;
    
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${selectedCity}&key=${process.env.WEATHER_API_KEY}`
    
        console.log('hiii');
    
     axios.get(url).then(accWeatherData=>{
        // console.log(accWeatherData.data);
        const weatherArr=accWeatherData.data.data.map(item =>
             new ForeCast(item.valid_date,item.weather.description));
            res.status(200).send(weatherArr);

     })
     
     
     .catch(error=>{
         res.status(500).send(error)
        })    
        
        
        
        
    }       

     
    class ForeCast {
        constructor(date, description) {
            this.date = date;
            this.description = description;
        }
    }