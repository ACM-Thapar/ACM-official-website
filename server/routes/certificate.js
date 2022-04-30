const express = require('express');
const admin = require('../middleware/admin.js')
const auth = require('../middleware/auth.js')

const {createCertificate,getAllCertificates,getCertificate,updateCertificate,deleteCertificate} = require('../controllers/certificate.js')
const router = express.Router();

router
.route('/')
.post([auth],admin,createCertificate)
.get([auth],getAllCertificates)

router
.route('/certificate_id')
.get([auth],getCertificate) 
.put([auth],admin,updateCertificate)
.delete([auth],admin,deleteCertificate)


module.exports = router;  