const express = require('express');
const router = express.Router();
const {
  createAchievement,
  getAllAchievements,
  getAchievement,
  updateAchievement,
  deleteAchievement,
} = require('../controllers/achievement.js');
const auth = require('../middleware/auth.js');
const admin = require('../middleware/admin.js');

router.route('/').post(createAchievement).get(getAllAchievements);

router
  .route('/:achievement_id')
  .get(auth, getAchievement)
  .put(auth, admin, updateAchievement)
  .delete(auth, admin, deleteAchievement);

module.exports = router;
