const Badge = require('../models/Badge')



async function createBadge(req,res){
    try{
            const newBadge = await Badge.create({...req.body})

            res.json(newBadge)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

async function getAllBadge(req,res){
    try{

            const allBadges = await Badge.find();
            res.json(allBadges)
    }catch(err){
        res.status(500).json(err.message)
    }
}

async function updateBadge(req,res){
    try{
        const badge = await Badge.findById({_id:req.params.badge_id}) 
        res.status(200).json(badge);
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

async function getBadge(req,res){

    try{
        const {badge_id} = req.params;
        const badge = await Badge.findOne({_id:badge_id});

        if(!badge)
        return res.status(400).json("badge not found")
        res.status(200).json(badge)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}
async function deleteBadge(req,res){

    try{
        const {badge_id} = req.params;
        const badge = await Badge.findOneAndDelete({_id:badge_id});

        if(!badge)
        res.status(400).json("Badge not found");

        res.status(200).json(badge)
    }
    catch(err){
        res.status(500).json(err.message)
    }
    
}


module.exports={createBadge,getAllBadge,updateBadge,getBadge,deleteBadge}