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

miscRouter.get('/users/:id/jobs', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `
      SELECT job_name
      FROM 
        jobs
        JOIN users_has_jobs ON jobs.id=users_has_jobs.jobs_id
      WHERE users_id=?
    `;

    const sqlValues = [id];
    const [resultJobs] = await db.query(sql, sqlValues);
    const jobs = resultJobs.map((job) => {
      return job.job_name;
    });
    res.json(jobs);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

miscRouter.put('/user/:id/update', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = 'UPDATE users SET ? WHERE id = ?';
    const sqlValues = [req.body, id];
    const [result] = await db.query(sql, sqlValues);
    res.status(200).send({
      ...req.body,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = miscRouter;
