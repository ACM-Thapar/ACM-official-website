const express = require('express');
const Event = require('../models/Event');

//@route    GET /event
//@desc     Get events
//@access   Public

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.find();
    return res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@route    POST /event/add
//@desc     Add an event
//@access   Private

exports.addEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      Name: req.body.Name,
      Description: req.body.Description,
      Time: req.body.Time,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
};
