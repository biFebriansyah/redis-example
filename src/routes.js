const express = require("express");
const route = express.Router();
const control = require('./controller/Example')
const utils = require('./utils/Caching')

route
    .get("/repos/:username", utils.getFromApi, control.getFromApi)

module.exports = route