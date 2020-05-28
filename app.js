const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const mongoose = require('./mongoose')

const app = express()
const port = process.env.PORT || 3000
const mongoHost = 'mongodb://localhost:27017/mongodb'

// view
// app.set('views', path.join(__dirname, 'views'))

// initial mongoose
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

const router = require('./routers/index')

app.use(bodyParser.json())
app.get('/homePage', (req, res) => {
  res.send('Welcome to Animal crossing social plateform!')
})
app.use('/api', router)


const server = http.createServer(app)
server.listen(port, () => {
  // const host = server.address().address
  // const { port } = server.address()
  console.log(`Node.js web server at port ${port} is running...`)
})
