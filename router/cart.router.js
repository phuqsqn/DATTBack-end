const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middlewares/async.middleware');
const authmiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

const {
  addToCart,
  getCart,
  deleteItemCart,
} = require('../controllers/cart.controller');

router
  .route('/')
  .post(
    asyncMiddleware(authmiddleware),
    roleMiddleware('user'),
    asyncMiddleware(addToCart),
  )
  .get(
    asyncMiddleware(authmiddleware),
    roleMiddleware('user'),
    asyncMiddleware(getCart),
  );

router
  .route('/:id_product')
  .delete(
    asyncMiddleware(authmiddleware),
    roleMiddleware('user'),
    asyncMiddleware(deleteItemCart),
  );

module.exports = router;
