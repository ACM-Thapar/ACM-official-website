var imageModel = require('./models');
var cloud = require('./cloudinaryConfig');

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
        // } else if (callback.length >= 1) {
        //   res.json({
        //     message: 'file already exist, rename the file and try again',
        //   });
      } else {
        //var paths = req.files.map(file => file.path)

        var imageDetails = {
          imageName: req.body.imageName,
          //imageName: req.files[0].originalname,
          cloudImage: req.files[0].path,
          //cloudImage: paths,
          imageId: '',
        };
        //console.log(imageDetails.cloudImage);
        cloud.uploads(imageDetails.cloudImage).then((result) => {
          console.log(result);
          var imageDetails = {
            imageName: req.body.imageName,
            cloudImage: result.url,
            imageId: result.id,
          };
          console.log(imageDetails.cloudImage);

          imageModel.create(imageDetails, (err, created) => {
            if (err) {
              res.json({
                err: err,
                message: 'could not upload image, try again',
              });
            } else {
              res.json({
                created: created,
                message: 'image uploaded successfully!!',
              });
            }
          });
        });
      }
    });
  } catch (execptions) {
    console.log(execptions);
  }
};
