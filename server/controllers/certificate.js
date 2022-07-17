const Certificate = require('../models/Certificate.js');
const User = require('../models/User.js');
const { userUpdate } = require('../helper/userUpdate.js');
//@route /
//@desc POST to create a new certificate
//@access Private/admin

async function createCertificate(req, res) {
  try {
    const certificate = await Certificate.create({ ...req.body });
    await userUpdate(certificate.user, 'certificates', certificate._id);
    res.json(certificate);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /
//@desc GET to get all certificate
//@access Private/

async function getAllCertificates(req, res) {
  try {
    const allCertificates = await Certificate.find().populate(
      'user',
      '-password',
    );
    res.status(200).json(allCertificates);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /:certificate_id
//@desc GET to get a specific certificate
//@access Private

async function getCertificate(req, res) {
  try {
    const { certificate_id } = req.params;
    const certificate = await Certificate.findById(certificate_id).populate(
      'user',
      '-password',
    );
    if (!certificate) return res.status(404).json('certificate not found');

    res.status(200).json(certificate);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /:certificate_id
//@desc PUT to update a  certificate
//@access Private/admin

async function updateCertificate(req, res) {
  try {
    const { certificate_id } = req.params;
    const certificate = await Certificate.findById(certificate_id);

    if (!certificate) return res.status(400).json('certificate not found');

    certificate.url = req.body.url || certificate.url;
    certificate.title = req.body.title || certificate.title;

    let certificateSet = new Set(certificate.user);
    certificateSet.add(req.body.user);
    badge.user = [...certificateSet];

    await certificate.save();

    await userUpdate(certificate.user, 'certificates', certificate._id);
    res.status(200).json(certificate);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /:certificate_id
//@desc DELETE to delete a  certificate
//@access Private/admin

async function deleteCertificate(req, res) {
  try {
    const { certificate_id } = req.params;
    const certificate = await Certificate.findOneAndDelete({
      _id: certificate_id,
    });
    if (!certificate) return res.status(400).json('Certificate not found');
    await userUpdate(certificate.user, 'certificates', certificate._id, true);
    res.json(certificate);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = {
  createCertificate,
  getAllCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate,
};
