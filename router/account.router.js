const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middlewares/async.middleware');
const authmiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

const {
  creatAccount,
  getAccount,
  deleteAccount,
  updateAccout,
  getAccountId
} = require('../controllers/account.controller');

router
  .route('/')
  .get(asyncMiddleware(authmiddleware), roleMiddleware(['admin','user']),asyncMiddleware(getAccount))
  .post(asyncMiddleware(creatAccount));
router.route('/:id').patch(asyncMiddleware(updateAccout)).delete(asyncMiddleware(deleteAccount));
router.route('/information/:id').get(asyncMiddleware(getAccountId))
module.exports = router;
