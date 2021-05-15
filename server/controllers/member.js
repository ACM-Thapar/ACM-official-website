const express = require('express');
const Member = require('../models/Member');
const { validationResult } = require('express-validator');

//@route    POST member/profile
//@desc     Create or Update a user's profile
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
    LinkedIn,
    Instagram,
    Facebook,
    Twitter,
    CodeForces,
    CodeChef,
    HackerRank,
    gfg,
  } = req.body;

  const newMember = {
    github,
    LinkedIn,
    Instagram,
    Facebook,
    Twitter,
    CodeForces,
    CodeChef,
    HackerRank,
    gfg,
  };

  const memberFields = {};
  memberFields.user = req.user.id;
  if (name) memberFields.name = name;
  if (gradYear) memberFields.gradYear = gradYear;
  if (branch) memberFields.branch = branch;
  if (tagline) memberFields.tagline = tagline;
  if (department) memberFields.department = department;
  if (rollNo) memberFields.rollNo = rollNo;
  if (personalEmail) memberFields.personalEmail = personalEmail;
  if (collegeEmail) memberFields.collegeEmail = collegeEmail;

  try {
    let profile = await Member.findOne({ user: req.user.id });

    if (profile) {
      //Updating an existing profile
      profile = await Member.findOneAndUpdate(
        { user: req.user.id },
        { $set: memberFields },
        { new: true },
      );
      return res.json(profile);
    }

    //Create
    profile = new Member(memberFields);
    profile.socialHandles.unshift(newMember);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
