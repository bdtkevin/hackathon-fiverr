const { db } = require('../conf');

const miscRouter = require('express').Router();

miscRouter.get('/', (req, res) => {
  res.status(200).send('Hello :) -- (misc)');
});

miscRouter.get('/users', async (req, res) => {
  try {
    const [result] = await db.query('SELECT * FROM users WHERE id = 1');
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = miscRouter;
