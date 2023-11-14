const express = require('express');
const router = express.Router();
const asyncMiddleware = require("../middlewares/async.middleware")

const {
  creatProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getAllProduct,
  getProductHot,
} = require('../controllers/product.controller');

router.route('/').get(asyncMiddleware(getAllProduct));
router.route('/product-hot').get(asyncMiddleware(getProductHot))
router.route('/:category_id').post(asyncMiddleware(creatProduct)).get(asyncMiddleware(getProduct));
router.route('/:id').patch(asyncMiddleware(updateProduct)).delete(asyncMiddleware(deleteProduct));
module.exports = router;
