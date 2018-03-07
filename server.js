const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const axios = require('axios');
const STATUS_USER_ERROR = 422;
const { PORT, gmaps } = require('./config.js');

server.use(bodyParser.json());

let searchlink = "https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters";
// example https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
// https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=YOUR_API_KEY

server.get('/', (req, res) => {
    console.log('it is hitting the server');
    console.log(key);
    res.send("Hello World!");
});

// server.get('/places', (req, res) => {
//     let query = req.body.query;
//     axios.get('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=YOUR_API_KEY')
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// });



server.listen(3000);