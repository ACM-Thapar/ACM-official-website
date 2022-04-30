const express = require('express');
const Event = require('../models/Event');

//@route    GET /event
//@desc     Get events
//@access   Public

async function getAllEvent (req, res){
  try {
    const event = await Event.find();
    return res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@route    POST /event/
//@desc     Add an event
//@access   Private

 async function addEvent (req, res){
  try {
    // const newEvent = new Event({
    //   Name: req.body.Name,
    //   Description: req.body.Description,
    //   Time: req.body.Time,
    //   StartDate: req.body.StartDate,
    //   EndDate: req.body.EndDate,
    // });

    // const event = await newEvent.save();
    const event = await Event.create({...req.body})
    res.json(event);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};

//@route    PUT /event/:event_id
//@desc     update an event
//@access   Private/admin
async function updateEvent(req,res){

  try{
    const {event_id} = req.params;
    const event = await Event.findById(event_id);

    if(!event) return res.status(400).json("event not found");

    let reqKeys = Object.keys(req.body);
    reqKeys.map(key=>{
      event[key] = req.body[key];
    })
    await event.save();
    res.json(event)
  }
  catch(err){
    res.status(500).json(err.message)
  }
}

//@route    GET /event/:event_id
//@desc     get an event
//@access   Private
async function getEvent(req,res){
  try{
    const {event_id} = req.params;
    const event  = await Event.findById(event_id);

    if(!event) return res.status(400).json("event not found");

    res.status(200).json(event);
  }
  catch(err){
    res.status(500).json(err.message);
  }
}
//@route    POST /event/:event_id
//@desc     Add an event
//@access   Private
async function deleteEvent(req,res){
  try{
    const {event_id} = req.params;
    const event = await Event.findOneAndDelete({_id:event_id})
  }
  catch(err){
    res.status(500).json(err.message);
  }
}
module.exports = {getAllEvent,addEvent,updateEvent,getEvent,deleteEvent}