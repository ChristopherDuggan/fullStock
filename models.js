const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: 'fullstock_db',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true
  }
});

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
  password {
    type: Sequelize.STRING
  },
  balance: {
    type: Sequelize.INTEGER
  }
});


const Stock = db.define('stocks', {
  companyName: Sequelize.STRING,
  ticker: Sequelize.STRING,
  qty: Sequelize.INTEGER
});

User.hasMany(Stock, {
  onDelete: 'cascade',
});

Stock.belongsTo(User);

module.exports = { User, Stock, db };
