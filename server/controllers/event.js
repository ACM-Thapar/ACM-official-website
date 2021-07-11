const express = require('express');
const Blog = require('../models/Blog');

//@route    GET /event
//@desc     Get events
//@access   Public

exports.getEvent = async (req, res) => {
  try {
    const event = await Blog.find();
    return res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
