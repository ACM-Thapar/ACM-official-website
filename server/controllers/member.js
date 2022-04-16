const express = require('express');
const Member = require('../models/Member');
const User = require('../models/User')
const { validationResult } = require('express-validator');

//@route    POST member/profile
//@desc     Create a members's profile
//@access   private

exports.memberProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // In case errors exist
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
    member:req.user,
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
    return res.status(200).json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


//@route    GET member/profile
//@desc     get all member profile
//@access   Public
exports.getAllMemberProfile = async (req,res)=>{
  try{  
    let profile = await Member.find();
    res.status(200).json(profile);
  }
  catch(err){
    res.status(400).json(err.message);
  }
}



//@route    GET member/profile/:_id
//@desc     Get profile (using user id)
//@access   private

exports.getMemberById = async (req, res) => {
  try {
    const profile = await Member.findOne({ _id: req.params._id })
    // console.log(profile.password);
    if (!profile) return res.status(400).json({ msg: 'Profile Not found' });

    res.status(200).json(profile);


  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile Not found' });
    }

    console.error(err.message);
    res.status(500).send('Server Error');
  }
};



//@route    PUT member/profile/:_id
//@desc     Update profile (using user id)
//@access   private


exports.updateMemberById = async(req,res)=>{
  try{
    const {_id} = req.params
    const data = req.body
    const profile = await Member.findById({_id})
    if(!profile)
    res.status(500).json('Profile doesnt exist');

    //updating data in profile
     Object.keys(data).filter(key =>{ 
      if(key in profile){
        profile[key] = data[key]
      }
    } )
    
    //updating social media handles if any
    Object.keys(data).filter(key =>{ 
      if(key in profile.socialHandles){
        profile.socialHandles[key] = data[key]
      }
    } )
    
    await profile.save();
    res.status(200).json(profile);
  }
  catch(err){
    res.status(400).json(err.message);
  }
}



//@route    DELETE member/profile/:_id
//@desc     delete profile (using user id)
//@access   private

exports.deleteMemberProfile = async(req,res)=>{

  try{
    const {_id} = req.params
    const deletedProfile = await Member.findOneAndDelete({_id})
    res.status(200).json(deletedProfile)
  }
  catch(err){
    res.status(400).json(err.message);
  }
}