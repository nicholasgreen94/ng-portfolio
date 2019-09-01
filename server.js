const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const path = require('path')
const projects = require('./routes/api/projects')

// Set Express app
const app = express()

// Bodyparser Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))

// DB Config
const db = require('./config/keys').mongoURI

mongoose
  .connect( db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err))

// Adding projects api routes
app.use('/api/projects', projects)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

//set PORT
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
