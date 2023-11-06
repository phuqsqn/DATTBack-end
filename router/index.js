const accountRouter = require('./account.router');
const categoryRouter = require('./category.router');
const commentRouter = require('./comment.router');
const producstRouter = require('./producst.router');
const jobRouter = require('./job.router');
const authRouter = require('./auth.router');
const errorHandle = require('../middlewares/error.handle');
const cartRouter = require("./cart.router");

module.exports = (app) => {
  app.use('/api/accounts', accountRouter);
  app.use('/api/categories', categoryRouter);
  app.use('/api/comments', commentRouter);
  app.use('/api/products', producstRouter);
  app.use('/api/jobs', jobRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/carts', cartRouter);
  app.use(errorHandle);
};
