const express = require('express');
const router = express.Router();

const {
  creatJob,
  getJob,
  deleteJob,
  updateJob,
  getAllJobs
} = require('../controllers/job.controller');

router.route('/').get(getAllJobs);
router.route('/:account_id').post(creatJob).get(getJob);
router.route('/:id').patch(updateJob).delete(deleteJob);
module.exports = router;
