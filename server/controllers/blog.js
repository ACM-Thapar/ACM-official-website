const express = require('express');
const Blog = require('../models/Blog');

//@route    GET /blog
//@desc     Get blog
//@access   Public

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.find().populate('Member');
    return res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@route    POST /blog/add
//@desc     Add a blog
//@access   Private

exports.postBlog = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    let writer = await User.findOne({ email: req.body.WrittenBy });

    const newBlog = new Blog({
      Title: req.body.Title,
      Description: req.body.Description,
      WrittenBy: writer._id,
    });

    const blog = await newBlog.save();
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
};
