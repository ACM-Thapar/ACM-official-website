const Certificate = require('../models/Certificate.js')


async function createCertificate(res,res){
    try{
        const certificate = await Certificate.create({...req.body})
        res.json(certificate);    
    
    }catch(err){
        res.status(500).json(err.message)
    }
}

async function getAllCertificates(req,res){
    try{
        const allCertificates = await Certificate.find();
        res.status(200).json(allCertificates);
    }catch(err){
        res.status(500).json(err.message)
    }
}
async function getCertificate(req,res){

    try{
        const {certificate_id} = req.params

    }catch(err){
        res.status(500).json(err.message)
    }
}

async function updateCertificate(req,res){
    const {certificate_id} = req.params;
    const certificate = await Certificate.findById(certificate_id);
    
     if(!certificate) return res.status(400).json("video not found")

     let reqKeys = Object.keys(req.body);

     reqKeys.map(key=>{
         certificate[key] = req.body[key];
     })
     certificate.save();
     res.status(200).json(certificate)
}

module.exports ={createCertificate,getAllCertificates,getCertificate,updateCertificate}