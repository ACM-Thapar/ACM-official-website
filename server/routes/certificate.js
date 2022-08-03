const express = require('express');
const admin = require('../middleware/admin.js');
const auth = require('../middleware/auth.js');

const {
  createCertificate,
  removeUser,
  getAllCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate,
} = require('../controllers/certificate.js');
const router = express.Router();

router
  .route('/')
  .post(auth, admin, createCertificate)
  // .post(auth, createCertificate)
  .get(getAllCertificates);
// .get(auth, getAllCertificates);

router
  .route('/:certificate_id')
  // .get(auth, getCertificate)
  .get(getCertificate)
  // .put(auth, admin, updateCertificate)
  .put(updateCertificate)
  .delete(auth, admin, deleteCertificate);

router
  .route('/remove/:certificate_id')
  // .post(auth,admin,removeUser)
  .post(removeUser);

module.exports = router;
