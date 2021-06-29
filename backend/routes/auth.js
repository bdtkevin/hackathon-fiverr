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
    const jobs = data.jobs_id;
    delete data.jobs_id;

    const [resultsUser] = await db.query('INSERT INTO users SET ?', data);
    console.log(resultsUser.insertId);

    for (let i = 0; i < jobs.length; i++) {
      const [resultsLink] = await db.query(
        'INSERT INTO users_has_jobs (users_id, jobs_id) VALUES (?,?)',
        [resultsUser.insertId, jobs[i]]
      );
    }
    delete data.password;
    data.id = resultsUser.insertId;
    const token = jwt.sign(data, jwt_secret);
    res.status(201).json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

authRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const token = jwt.sign(req.user, jwt_secret);
  res.status(200).json({
    ...req.user,
    token: token,
  });
});

module.exports = authRouter;
