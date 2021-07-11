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
