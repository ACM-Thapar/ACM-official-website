const express = require('express');
const router = express.Router();
const Project = require('../models/Project');



router.get('/getprojects', async (req, res) => {
    try {
      const projects = await Project.find({});
      res.status(200).json({ success: true, data: projects });
    } catch (e) {
      res.status(400).json({ success: false, data: e });
    }
  });



  
  module.exports = router;
