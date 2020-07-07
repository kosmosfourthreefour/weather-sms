const axios = require("axios");
const dotenv = require("dotenv").config();
const ZIP = 65802;

let API = `https://api.openweathermap.org/data/2.5/weather?zip=${ZIP}&appid=${process.env.SUPER_SECRET_API_KEY}`;
let dangerWeatherCodes = {
  212: "heavy thunderstorm",
  511: "freezing rain",
  781: "tornado",
};

axios
  .get(API)
  .then(function (response) {
    // handle success
    console.log(response.data.weather[0].id);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

/**
 * TODO
 * if response.data.weather[0].id is in dangerWeatherCodes
 * start the twilio sms-alert
 * otherwise return, maybe with a guard clause
 */
