const totoRouter = require('express').Router();

totoRouter.get('/', (req, res) => {
  res.status(200).send("Hello, it's the toto router");
});

module.exports = totoRouter;
