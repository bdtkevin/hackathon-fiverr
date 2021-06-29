const authRouter = require('./auth');
const miscRouter = require('./misc');

const setupRoutes = (app) => {
  app.use('/auth', authRouter);
  app.use('/', miscRouter);
};

module.exports = {
  setupRoutes,
};
