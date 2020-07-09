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
  "heavy thunderstorm": 212,
  "freezing rain": 511,
  tornado: 781,
};

function getResponse() {
  axios
    .get(API)
    .then(function (response) {
      // handle success
      return response.data.weather[0].id;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

function textIt() {
  client.messages
    .create({
      body: "Danger weather!!☔⚡🌩️ Get your Kindle ready.",
      from: TWILIO_NUMBER,
      to: ME_NUMBER,
    })
    .then((message) => console.log(message.sid));
}

(function () {
  let res = getResponse();
  if (Object.values(dangerWeatherCodes).includes(res)) textIt();
})();
