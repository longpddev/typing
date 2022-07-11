const express = require('express')
const fetch = require('node-fetch')
const routes = express.Router()
routes.get('/', async (req, res) => {
  let result = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=ff7428821958de5139771b759f4f4330')
  result = await result.json()
  res.json({
    data: result
  })
})

module.exports = routes