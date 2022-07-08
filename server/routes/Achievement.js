const express = require('express');
const router = express.Router();
const {
  createCertificate,
  getAllCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate,
} = require('../controllers/achievement.js');
const { auth } = require('../middleware/auth.js');
const { admin } = require('../middleware/admin.js');

router
  .route('/')
  .post([auth], admin, createCertificate)
  .get([auth], getAllCertificates);

router
  .route('/:certificate_id')
  .get([auth], getCertificate)
  .put([auth], admin, updateCertificate)
  .delete([auth], admin, deleteCertificate);
