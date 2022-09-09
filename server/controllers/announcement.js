const Announcement = require('../models/Announcement.js');

//@route /
//@desc POST to create a new announcement
//@access private/admin

async function createAnnouncement(req, res) {
  try {
    const announcement = await Announcement.create(req.body);
    res.json(announcement);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.messsage);
  }
}

//@route /:announcement_id
//@desc DELETE to delete an announcement
//@access private/admin
async function deleteAnnouncement(req, res) {
  try {
    const { announcement_id } = req.params;

    await Announcement.findOneAndDelete({ _id: announcement_id });
    res.json('announcement removed');
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /:announcement_id
//@desc PUT to update  an announcement
//@access private/admin
async function updateAnnouncement(req, res) {
  try {
    const { announcement_id } = req.params;
    const announcement = await Announcement.findById(announcement_id);
    if (!announcement) return res.status(400).json('announcement not found');

    let reqKeys = Object.keys(req.body);
    reqKeys.map((key) => {
      announcement[key] = req.body[key];
    });
    await announcement.save();
    res.json(announcement);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /
//@desc GET to get all announcements
//@access public

async function getAnnouncement(req, res) {
  try {
    const { limit } = req.query;
    if (limit) {
      const ann = await Announcement.find().limit(limit);
      return res.status(200).json(ann);
    }
    let allProfiles = await Announcement.find();
    res.status(200).json(allProfiles);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
  getAnnouncement,
  //   getUserAnnouncements,
};
