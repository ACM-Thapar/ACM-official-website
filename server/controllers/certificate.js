const Certificate = require('../models/Certificate.js')



//@route /
//@desc POST to create a new certificate
//@access Private/admin

async function createCertificate(req,res){
    try{
        const certificate = await Certificate.create({...req.body})
        res.json(certificate);    
    
    }catch(err){
        res.status(500).json(err.message)
    }
}

//@route /
//@desc GET to get all certificate
//@access Private/

async function getAllCertificates(req,res){
    try{
        const allCertificates = await Certificate.find();
        res.status(200).json(allCertificates);
    }catch(err){
        res.status(500).json(err.message)
    }
}

//@route /:certificate_id
//@desc GET to get a specific certificate
//@access Private

async function getCertificate(req,res){

    try{
        const {certificate_id} = req.params
        const certificate = await Certificate.findById(certificate_id);
        if(!certificate) return res.status(404).json("certificate not found");

        res.status(200).json(certificate)

    }catch(err){
        res.status(500).json(err.message)
    }
}

//@route /:certificate_id
//@desc PUT to update a  certificate
//@access Private/admin

async function updateCertificate(req,res){
    try{
    const {certificate_id} = req.params;
    const certificate = await Certificate.findById(certificate_id);
    
     if(!certificate) return res.status(400).json("certificate not found")

     let reqKeys = Object.keys(req.body);

     reqKeys.map(key=>{
         certificate[key] = req.body[key];
     })
     await certificate.save();
     res.status(200).json(certificate)
    }catch(err){
        console.log("here")
        res.status(500).json(err.message)
    }
}

//@route /:certificate_id
//@desc DELETE to delete a  certificate
//@access Private/admin

async function deleteCertificate(req,res){
    try{
        const {certificate_id} = req.params;
    const certificate = await Certificate.findOneAndDelete({_id:certificate_id});
        res.json(certificate)
        
    }   catch(err){
        res.status(500).json(err.message)
    }
}

module.exports ={createCertificate,getAllCertificates,getCertificate,updateCertificate,deleteCertificate}