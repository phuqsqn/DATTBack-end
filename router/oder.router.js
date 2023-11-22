const express = require('express');
const router = express.Router();
const asyncMiddleware = require("../middlewares/async.middleware")

const {
    getOder,
    creatOder,
} = require('../controllers/oder.controller');

router.route('/')
    .get(asyncMiddleware(getOder))
    .post(asyncMiddleware(creatOder))
module.exports = router;