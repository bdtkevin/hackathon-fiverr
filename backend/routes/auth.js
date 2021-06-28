const authRouter = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, jwt_rounds, jwt_secret } = require('../conf');
require('../passport-strategies');

authRouter.post('/signup', async (req, res) => {
  try {
    const data = req.body;

    data.password = bcrypt.hashSync(data.password, jwt_rounds);
    const [results] = await db.query('INSERT INTO users SET ?', data);
    delete data.password;
    data.id = results.insertId;
    const token = jwt.sign(data, jwt_secret);
    res.status(201).json(token);
  } catch (err) {
    res.status(500).json(err);
  }
});

authRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const token = jwt.sign(req.user, jwt_secret);
  res.status(200).json(token);
});

module.exports = authRouter;
