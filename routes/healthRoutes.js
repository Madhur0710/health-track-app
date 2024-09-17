const express = require('express');
const router  = express.Router();
const {
    getHealthRecords,
    getHealthRecordById,
    addHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
  } = require('../controllers/healthController');

router.route('/health-records').get(getHealthRecords).post(addHealthRecord);
router.route('/health-records/:id').get(getHealthRecordById).put(updateHealthRecord).delete(deleteHealthRecord);

module.exports = router;