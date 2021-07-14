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

//@route    POST /team/add
//@desc     Add team
//@access   Private

exports.addTeam = async (req, res) => {
  try {
    const newTeam = new Team({ ...req.body });
    const team = await newTeam.save();
    res.json(team);

    res.json();
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
};
