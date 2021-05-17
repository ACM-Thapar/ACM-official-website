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

//@route    POST member/profile?_id=
//@desc     Update a user's profile
//@access   Private

exports.updateMemberProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // In case errors exist
    console.errors(errors);
    return res.status(400).json({ errors: errors.array() });
  }

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

  const memberFields = {};
  memberFields._id = req.query._id;
  if (name) memberFields.name = name;
  if (gradYear) memberFields.gradYear = gradYear;
  if (branch) memberFields.branch = branch;
  if (tagline) memberFields.tagline = tagline;
  if (department) memberFields.department = department;
  if (rollNo) memberFields.rollNo = rollNo;
  if (personalEmail) memberFields.personalEmail = personalEmail;
  if (collegeEmail) memberFields.collegeEmail = collegeEmail;

  try {
    let profile = await Member.findById(req.query._id);

    if (profile) {
      profile = await Member.findOneAndUpdate(
        { _id: req.query._id },
        { $set: memberFields },
        { new: true },
      );

      if (github) profile.socialHandles.github = github;
      if (linkedIn) profile.socialHandles.linkedIn = linkedIn;
      if (instagram) profile.socialHandles.instagram = instagram;
      if (facebook) profile.socialHandles.facebook = facebook;
      if (twitter) profile.socialHandles.twitter = twitter;
      if (codeForces) profile.socialHandles.codeForces = codeForces;
      if (codeChef) profile.socialHandles.codeChef = codeChef;
      if (hackerRank) profile.socialHandles.hackerRank = hackerRank;
      if (gfg) profile.socialHandles.gfg = gfg;

      return res.json(profile);
    } else {
      console.log('Profile not found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
