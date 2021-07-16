const express = require('express');
const Team = require('../models/Team');

//@route    GET /team
//@desc     Get team
//@access   Public

exports.getTeam = async (req, res) => {
  try {
    const president = await Team.find().populate('President', [
      'name',
      'tagline',
      'socialHandles',
    ]);
    const societyHead = await Team.find().populate('SocietyHead', [
      'name',
      'tagline',
      'socialHandles',
    ]);
    const departmentHead = await Team.find().populate('DepartmentHead', [
      'name',
      'tagline',
      'socialHandles',
    ]);

    const team = {
      president,
      societyHead,
      departmentHead,
    };

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
