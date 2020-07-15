/* eslint-disable linebreak-style */
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const mongoose = require('./mongoose')
// const lib = require('lib')

const app = express()
const port = process.env.PORT || 3000
const mongoHost = 'mongodb://192.168.60.50:27017/game'

mongoose.init({
  host: mongoHost,
  autoIndex: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  bufferCommands: false,
  // autoReconnect: true,
  useUnifiedTopology: true
})

// lib.redis.init(redisSetting)

const router = require('./routers/index')

app.use(bodyParser.json())
app.get('/homePage', (req, res) => {
  res.send('Welcome to MongoDB API plateform!')
})
app.use('/api', router)


const server = http.createServer(app)
server.listen(port, () => {
  console.log(`Node.js web server at port ${port} is running...`)
})
