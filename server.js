const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// initializing the express app
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.use (morgan('dev'))

app.get('/', async (req, res) => {
  try {
    res.send ({ hello: "world" })
  } catch (e) {
    res.status(e.status).json({ msg: e.status })
  }
})

// establishing the I/O port
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`fullStock backend listening on port: ${PORT}!`))
