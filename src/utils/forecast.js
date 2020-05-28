const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d8890f9d1935430a45541f35035d5081&query='+ latitude +', '+ longitude

    request( {url, json: true}, (error, responce) => {
        
         if (error){
             callback('unable to connect to weather services')
         } else if (!responce){
             callback('no weather data !!')
         } else {
             const {weather_descriptions,temperature,feelslike } = responce.body.current
             callback(undefined, weather_descriptions[0] +'. Its is currently ' +temperature+  ' degrees out. It feels like '+ feelslike +' degrees out')
         }
    })
}

module.exports = forecast