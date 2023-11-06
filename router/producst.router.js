const express = require('express');
const router = express.Router();

const {
  creatProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getAllProduct
} = require('../controllers/product.controller');

router.route('/').get(getAllProduct);
router.route('/:category_id').post(creatProduct).get(getProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct);
module.exports = router;
