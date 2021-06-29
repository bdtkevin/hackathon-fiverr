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

miscRouter.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';
    const sqlValues = [id];
    const [result] = await db.query(sql, sqlValues);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

miscRouter.get('/user_job/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = 'SELECT jobs_id FROM users_has_jobs WHERE users_id = ?';

    const sqlValues = [id];
    const [resultJobs] = await db.query(sql, sqlValues);
    console.log(resultJobs);
    //res.send(resultJobs);
    console.log(resultJobs[0].jobs_id);
    for (let i = 0; i < resultJobs.length; i++) {
      const [resultJob] = await db.query(
        'SELECT job_name FROM jobs WHERE id = ?',
        resultJobs[i].jobs_id
      );
      console.log('toto');
      console.log(resultJob);
      res.send(resultJob);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = miscRouter;
