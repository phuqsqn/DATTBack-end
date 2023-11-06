const express = require('express');
const router = express.Router();

const {
  creatComment,
  getComment,
  deleteComment,
  updateComment,
} = require('../controllers/comment.controller');

router.route('/:product_id').post(creatComment).get(getComment);
router.route('/:id').patch(updateComment).delete(deleteComment);
module.exports = router;
