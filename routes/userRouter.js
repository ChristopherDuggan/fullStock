const { Router } = require('express')
const userRouter = Router()
const { User, Stock } = require('../models')
const bodyParser = require('body-parser')

userRouter.use(bodyParser.json())

// sign in
userRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findAll({
      where: {
        email: email,
        password: password
      }
    })

    res.json(user[0])
  } catch (e) {
    console.log('error signing in')
    res.status(400).json({ msg: e.status })
  }
})

// register a new user
userRouter.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (e) {
    res.status(400).json({ msg: e.status })
  }
})

// alter a user
userRouter.put('/:id/update', async (req, res) => {
  try {
    const id = req.params.id
    const editUser = await User.findByPk(id)
    if (editUser) await editUser.update(req.body)
    res.send(editUser)
  } catch (e) {
    res.status(400).json({ msg: e.status })
  }
})

// add a stock
userRouter.post('/addstock', async (req, res) => {
  try {
    const stock = await Stock.create(req.body)
    res.send(stock)
  } catch (e) {
    res.status(400).json({ msg: e.status })
  }
})

// get all of a user's stocks
userRouter.get('/:id/getallstocks', async (req, res) => {
  try {
    const id = req.params.id
    const stocks = await Stock.findAll({ where: { user_id: id } })
    res.send(stocks)
  } catch (e) {
    res.status(400).json({ msg: e.status })
  }
})

module.exports = { userRouter }
