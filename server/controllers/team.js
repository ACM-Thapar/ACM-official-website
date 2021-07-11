const express = require('express');
const Team = require('../models/Team');

//@route    GET /team
//@desc     Get team
//@access   Public

exports.getTeam = async (req, res) => {
  try {
    const team = await Team.find().populate('Member', [
      'name',
      'tagline',
      'socialHandles',
    ]);
    return res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
