const express = require('express')
const cors = require('cors')
const path = require('./routes/auth')
const fs = require('fs')
const app = express()
const routes = './routes'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// load all routes and register it
fs.readdir(routes, (err, files) => {
  files.forEach(file => {
    const filePath = '/' + file.replace(/\..*$/, '')
    const fullPath = routes + filePath
    const route = require(fullPath)
    app.use(filePath, route)
    console.log(filePath)
  });
});

app.listen(8080, () => {
  console.log('app run with port: http://localhost:8080')
})