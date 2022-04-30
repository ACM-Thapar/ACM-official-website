const Video = require('../models/Video.js')


//@route /
//@desc POST to create a new video
//@access Private/Admin

async function createVideo(req,res){
    try{

        const newVideo = await Video.create({...req.body}) 
        if(!newVideo){
            res.status(500).json("server errr")
        }
        res.status(500).json(newVideo);
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}
//@route /
//@desc GET to get all videos 
//@access Private
async function getAllVideo(req,res){
    try{
        const newVideo = await Video.find();

        res.status(200).json(newVideo);
    }
    catch(err){
        res.status(500).json(err.message)
    }
}
//@route /:video_id
//@desc GET to  get a specific video
//@access Private

async function getVideo(req,res){

    try{
        const {video_id} = req.params;
        const video = await Video.findById(video_id);

        if(!video)
        return res.status(500).json("Video doesnt exist")

        res.status(200).json(video);
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

//@route /:video_id
//@desc PUT to update a video  
//@access Private/Admin
async function updateVideo(req,res){
    try{
        const {video_id} = req.params;
        const video = await Video.findById(video_id);
        
         if(!video) return res.status(400).json("video not found")

         let reqKeys = Object.keys(req.body);

         reqKeys.map(key=>{
             video[key] = req.body[key];
         })
         await video.save();
         res.status(200).json(video)
    }
    catch(err){
        res.status(500).json(err.message);
    }
}
//@route /:video_id
//@desc DELETE to delete a video  
//@access Private/Admin

async function deleteVideo(req,res){
    try{
        const {video_id} = req.params;
        const video = await Video.findOneAndDelete({_id:video_id});

        if(!video)
        return res.status(400).json("video doesnt exist");
        res.status(200).json(video);
    }catch(err){
        res.status(500).json(err.message);
    }
}

module.exports = {createVideo,getAllVideo,getVideo,updateVideo,deleteVideo}