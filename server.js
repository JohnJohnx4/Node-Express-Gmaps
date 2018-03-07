const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const STATUS_USER_ERROR = 422;

server.use(bodyParser.json());



server.listen(3000);