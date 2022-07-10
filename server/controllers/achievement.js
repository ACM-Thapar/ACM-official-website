const Achievement = require('../models/Achievement');

//@route   POST /achievements
//@desc    Create a new achievement
//@access  Private/admin
async function createAchievement(req, res) {
  try {
    const achievement = new Achievement({
      title: req.body.title,
      description: req.body.description,
    });
    await achievement.save();
    res.json(achievement);
  } catch (err) {
    res.status(500).json(err);
  }
}
//@route   GET /achievements
//@desc    Get all achievements
//@access  Public
async function getAllAchievements(req, res) {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res.status(500).json(err);
  }
}

//@route   GET /achievements/:id
//@desc    Get a single achievement
//@access  Public
async function getAchievement(req, res) {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) res.status(404).json('Achievement not found');
    res.json(achievement);
  } catch (err) {
    res.status(500).json(err);
  }
}

//@route   PUT /achievements/:id
//@desc    Update a single achievement
//@access  Private/admin
async function updateAchievement(req, res) {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) res.status(404).json('Achievement not found');

    achievement.title = req.body.title || achievement.title;
    achievement.description = req.body.description || achievement.description;

    await achievement.save();
    res.json(achievement);
  } catch (err) {
    res.status(500).json(err);
  }
}

//@route   DELETE /achievements/:id
//@desc    Delete a single achievement
//@access  Private/admin
async function deleteAchievement(req, res) {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) res.status(404).json('Achievement not found');
    await achievement.remove();
    res.json(achievement);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  createAchievement,
  getAllAchievements,
  getAchievement,
  updateAchievement,
  deleteAchievement,
};
