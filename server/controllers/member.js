const express = require('express');
const Member = require('../models/Member');
const { validationResult } = require('express-validator');

//@route    POST member/profile
//@desc     Create a user's profile
//@access   Private

exports.memberProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // In case errors exist
    console.errors(errors);
    return res.status(400).json({ errors: errors.array() });
  }

  // destructure the request
  const {
    name,
    gradYear,
    branch,
    tagline,
    department,
    rollNo,
    personalEmail,
    collegeEmail,

    github,
    linkedIn,
    instagram,
    facebook,
    twitter,
    codeForces,
    codeChef,
    hackerRank,
    gfg,
  } = req.body;

  const newMember = {
    github,
    linkedIn,
    instagram,
    facebook,
    twitter,
    codeForces,
    codeChef,
    hackerRank,
    gfg,
  };

  profile = new Member({
    name,
    gradYear,
    branch,
    tagline,
    department,
    rollNo,
    personalEmail,
    collegeEmail,
    socialHandles: newMember,
  });

  try {
    await profile.save();
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@route    GET member/profile/:_id
//@desc     Get profile (using user id)
//@access   Public

exports.getMemberById = async (req, res) => {
  try {
    const profile = await Member.findOne({ _id: req.params._id });

    if (!profile) return res.status(400).json({ msg: 'Profile Not found' });

    res.json(profile);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile Not found' });
    }

    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
