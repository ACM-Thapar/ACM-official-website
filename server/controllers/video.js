const Video = require('../models/Video.js')


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

async function getAllVideo(req,res){
    try{
        const newVideo = await Video.find();

        res.status(200).json(newVideo);
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

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

module.exports = {createVideo,getAllVideo,getVideo}