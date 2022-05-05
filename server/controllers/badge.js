const Badge = require('../models/Badge')


//@route /
//@desc POST to create a new badge
//@access Private/Admin
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

//@route /
//@desc GET to get al badges  
//@access Private
async function getAllBadge(req,res){
    try{

            const allBadges = await Badge.find();
            res.json(allBadges)
    }catch(err){
        res.status(500).json(err.message)
    }
}

//@route /:video_id
//@desc PUT  to update a badge  
//@access Private/Admin
async function updateBadge(req,res){
    try{
        const badge = await Badge.findById({_id:req.params.badge_id}) 

        if(!badge) return res.status(400).json("badge not found")

        let badgeKeys = Object.keys(badge);
        let reqKeys = Object.keys(req.body);
        
        for(let i=0;i<reqKeys.length;i++){
            badge[reqKeys[i]] = req.body[reqKeys[i]];
        }
        await badge.save();

        res.status(200).json(badge);
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

//@route /:video_id
//@desc GET to  get a badge
//@access Private
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
//@route /:video_id
//@desc DELETE  to delete a badge  
//@access Private/Admin
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