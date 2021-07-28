var imageModel = require('./models');
var cloud = require('./cloudinaryConfig');
const Member = require('../models/Member');

exports.createApp = (req, res) => {
  try {
    var imageDetails = {
      imageName: req.body.imageName,
    };

    imageModel.find({ imageName: imageDetails.imageName }, (err, callback) => {
      if (err) {
        console.log(err);
        res.json({
          err: err,
          message: 'there was a problem uploading image',
        });
      } else {
        var imageDetails = {
          imageName: req.files[0].originalname,
          cloudImage: req.files[0].path,
          imageId: '',
        };
        cloud.uploads(imageDetails.cloudImage).then(async (result) => {
          let member = await Member.findOne({ _id: req.params._id });

          if (!member)
            return res.status(400).json({ msg: 'Profile Not found' });

          var imageDetails = {
            imageName: req.body.imageName,
            cloudImage: result.url,
            imageId: result.id,
          };

          member = await Member.findOneAndUpdate(
            { _id: req.params._id },
            { $set: { ImgURL: imageDetails.cloudImage } },
          );
          res.json(imageDetails.cloudImage);
        });
      }
    });
  } catch (execptions) {
    console.log(execptions);
  }
};
