const express = require('express');
const router = express.Router();
const { getUserProgress, updateProgress, getUserStats } = require('../controllers/progressController');
const { protect } = require('../middleware/authMiddleware');

// Protect all progress routes since they require a logged in user
router.use(protect);

router.route('/')
    .get(getUserProgress);

router.route('/stats')
    .get(getUserStats);

router.route('/:problemId')
    .post(updateProgress);

module.exports = router;
