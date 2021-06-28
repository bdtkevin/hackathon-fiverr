const totoRouter = require('./toto');

const setupRoutes = (app) => {
  app.use('/toto', totoRouter);
};

module.exports = {
  setupRoutes,
};
