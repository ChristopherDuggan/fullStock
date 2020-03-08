const { Sequelize } = require('sequelize')

const db = new Sequelize(
  (process.env.DATABASE_URL || 'postgres://localhost:5432/fullstock-cd'),
  {
  database: 'fullstock-cd',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true
  }
})

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  balance: {
    type: Sequelize.DECIMAL(20, 4)
  }
})

const Stock = db.define('stocks', {
  companyName: Sequelize.STRING,
  ticker: Sequelize.STRING,
  qty: Sequelize.INTEGER
})

User.hasMany(Stock, {
  onDelete: 'cascade'
})

Stock.belongsTo(User)

module.exports = {
  User,
  Stock,
  db
}
