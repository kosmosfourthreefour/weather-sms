const axios = require("axios");
const dotenv = require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const ME_NUMBER = process.env.ME_NUMBER;
const TWILIO_NUMBER = process.env.TWILIO_NUMBER;
const client = require("twilio")(accountSid, authToken);
const ZIP = 65802;
const API_KEY = process.env.SUPER_SECRET_API_KEY;
const API = `https://api.openweathermap.org/data/2.5/weather?zip=${ZIP}&appid=${API_KEY}`;
const dangerWeatherCodes = {
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

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: TWILIO_NUMBER,
    to: ME_NUMBER,
  })
  .then((message) => console.log(message.sid));

/**
 * TODO
 * if response.data.weather[0].id is in dangerWeatherCodes
 * start the twilio sms-alert
 * otherwise return, maybe with a guard clause
 */
