const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const axios = require('axios');
const STATUS_USER_ERROR = 422;
const fetch = require('node-fetch');

const config = require('./config.js');

const PORT = config.port;
const API_KEY = config.gmaps.apiKey;

server.use(bodyParser.json());

let searchlink = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
let key = `&key=` + API_KEY;

server.get('/place', (req, res) => {
    if (req.query.term) {
        var query = req.query.term.replace(" ", "+");

        let searchURL = searchlink + query + key;
        console.log(searchURL);
        fetch(searchURL)
        .then(res => res.json())
        .then(json => {
            console.log(json.results[0]);
            res.send(json.results[0]);
        })
        .catch((err) => {
            res.status(STATUS_USER_ERROR);
            res.send('There was an error fetching the place');
        });
    }
});


server.listen(PORT);