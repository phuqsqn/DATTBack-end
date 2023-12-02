const express = require('express');
const router = express.Router();
const asyncMiddleware = require("../middlewares/async.middleware")

const {
    getOder,
    creatOder,
    deleteOder,
    updateOder
} = require('../controllers/oder.controller');

router.route('/')
    .get(asyncMiddleware(getOder))
    .post(asyncMiddleware(creatOder))
router.route('/:id')
    .delete(asyncMiddleware(deleteOder))
    .patch(asyncMiddleware(updateOder))
module.exports = router;