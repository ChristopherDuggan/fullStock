const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// require('dotenv').config()
const { userRouter } = require('./routes/userRouter')

// initializing the express app
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/user', userRouter)

// deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// establishing the I/O port
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`fullStock backend listening on port: ${PORT}!`))
