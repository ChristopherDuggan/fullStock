const { User, Stock } = require('./models');

// delete database contents

const main = async () => {
  await User.destroy({
    where: {}
  });

  await Stock.destroy({
    where: {}
  });

// default user
  await User.create({
    username: 'Ruberto Duck',
    email: 'wet@bird.com',
    password: 'quack',
    balance: 5000
  });

  await Stock.create({
    companyName: 'Bird Construction Company',
    ticker: 'BDT',
    qty: 100,
    userId: 1
  })

}

const run = async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  } finally {
    await process.exit();
  }
}

run();
