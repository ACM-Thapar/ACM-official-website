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
    grad_year,
    branch,
    tagline,
    department,
    roll_no,
    personal_email,
    college_email,

    github,
    LinkedIn,
    Instagram,
    Facebook,
    Twitter,
  } = req.body;

  const newMember = {
    github,
    LinkedIn,
    Instagram,
    Facebook,
    Twitter,
  };

  const memberFields = {};
  memberFields.user = req.user.id;
  if (name) memberFields.name = name;
  if (grad_year) memberFields.grad_year = grad_year;
  if (branch) memberFields.branch = branch;
  if (tagline) memberFields.tagline = tagline;
  if (department) memberFields.department = department;
  if (roll_no) memberFields.roll_no = roll_no;
  if (personal_email) memberFields.personal_email = personal_email;
  if (college_email) memberFields.college_email = college_email;

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
    profile.social_handles.unshift(newMember);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
