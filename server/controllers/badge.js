const Badge = require('../models/Badge.js');
const User = require('../models/User');
const { userUpdate } = require('../helper/userUpdate.js');
//@route /
//@desc POST to create a new badge
//@access Private/Admin
async function createBadge(req, res) {
  try {
    const newBadge = await Badge.create({ ...req.body });
    await userUpdate(newBadge.user, 'badges', newBadge._id);
    res.json(newBadge);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /
//@desc GET to get al badges
//@access Private
async function getAllBadge(req, res) {
  try {
    const allBadges = await Badge.find().populate('user', '-password');
    res.json(allBadges);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /:badge_id
//@desc PUT  to update a badge
//@access Private/Admin
async function updateBadge(req, res) {
  try {
    let badge = await Badge.findById(req.params.badge_id);

    if (!badge) return res.status(400).json('badge not found');

    badge.badge = req.body.badge || badge.badge;
    badge.description = req.body.description || badge.description;
    badge.url = req.body.url || badge.url;

    let badgeSet = new Set(badge.user);
    badgeSet.add(req.body.user);
    badge.user = [...badgeSet];

    await badge.save();
    await userUpdate(badge.user, 'badges', badge._id);
    res.status(200).json(badge);
    // res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /:badge_id
//@desc GET to  get a badge
//@access Private
async function getBadge(req, res) {
  try {
    const { badge_id } = req.params;
    const badge = await Badge.findById(badge_id).populate('user', '-password');

    if (!badge) return res.status(400).json('badge not found');
    res.status(200).json(badge);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
}
//@route /:badge_id
//@desc DELETE  to delete a badge
//@access Private/Admin
async function deleteBadge(req, res) {
  try {
    const { badge_id } = req.params;
    const badge = await Badge.findOneAndDelete({ _id: badge_id });

    if (!badge) return res.status(400).json('Badge not found');

    await userUpdate(badge.user, 'badges', badge._id, true);

    res.status(200).json(badge);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
async function removeUser(req, res) {
  try {
    const { badge_id } = req.params;

    let badge = await Badge.findById(badge_id);

    if (!badge) return res.status(400).json('Badge not found');

    badge.user = badge.user.filter((id) => {
      return req.body.user.includes(id.toString()) === false;
    });

    await badge.save();
    await userUpdate(req.body.user, 'badges', badge._id, true);

    res.status(200).json(badge);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
}

module.exports = {
  createBadge,
  getAllBadge,
  updateBadge,
  getBadge,
  deleteBadge,
  removeUser,
};
