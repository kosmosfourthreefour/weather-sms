const axios = require("axios");
const ZIP = 65802;
import API_KEY from "hide.js";
let API = `https://api.openweathermap.org/data/2.5/weather?zip=${ZIP}&appid=${API_KEY}`;
let test = "https://jsonplaceholder.typicode.com/posts/1";
let dangerWeatherCodes = {
  212: "heavy thunderstorm",
  511: "freezing rain",
  781: "tornado",
};

// axios
//   .get(API)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     // console.log(error);
//   });
console.log(API_KEY);
