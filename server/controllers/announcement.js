const Announcement = require('../models/Announcement.js')



//@route /
//@desc POST to create a new announcement
//@access private/admin

async function createAnnouncement(req,res){

    try{
        const {heading,content,type,year} = req.body

        const announcementObject = {
            heading,
            content,
            type,
            year
        }
        const isExist = await Announcement.findOne({announcedBy:req.user._id})
        if(!isExist){
        const newAnnouncement = new Announcement({
            announcedBy:req.user._id,
            announcements:[announcementObject]
        })    

        await newAnnouncement.save()
            return res.status(200).json({status:true,msg:"announcement created"})
        }

        isExist.announcements.push(announcementObject)
        isExist.save()
        // const data= req.body
        // await Announcement.create({...data})
        res.status(200).json({status:true,msg:"announcement created"})

    }
    catch(err){
        res.status(500).json(err.messsage)
    }
}

//@route /:announcement_id
//@desc DELETE to delete an announcement
//@access private/admin
async function deleteAnnouncement(req,res){
    try{
        const {announcement_id} = req.params
        var {announcements} = await Announcement.findOne({announcedBy:req.user._id})
         let newAnnouncements = announcements.filter(announcement=> 
            {   
                let id = JSON.stringify(announcement._id)
                id = id.split('"')[1]
                return id !== announcement_id
            })
             
            await Announcement.findOneAndUpdate({announcedBy:req.user._id},{announcements:newAnnouncements})
        // await Announcement.findOneAndDelete({_id:announcement_id})
        res.json("announcement removed")
    }
    catch(err){
        res.status(500).json(err.message)
    }
}


//@route /:announcement_id
//@desc PUT to update  an announcement
//@access private/admin
async function updateAnnouncement(req,res){
    try{

        const {announcement_id} = req.params
        var  userAnnouncements = await Announcement.findOne({announcedBy:req.user._id})
        var {announcements} = userAnnouncements
        var newAnnoucements = announcements.filter(announcement=>{

            let id = JSON.stringify(announcement._id ).split('"')[1];
            if(id === announcement_id){
                let keyArr = Object.keys(req.body)
                for(let i=0;i<keyArr.length;i++){
                    announcement[keyArr[i]] = req.body[keyArr[i]]
                }
            }
        })
        await userAnnouncements.save()

        res.json(announcements)
        
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

//@route /
//@desc GET to get all announcements
//@access public

async function getAnnouncement(req,res){
    try{
        let allProfiles = await Announcement.find();

        res.status(200).json(allProfiles)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

//@route /:user_id
//@desc GET to get all announcements of a user
//@access public

async function getUserAnnouncements(req,res){
    try{
        const {user_id} = req.params;

        const userAnnouncements = await Announcement.findOne({announcedBy:user_id}) 


        res.status(200).json(userAnnouncements)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

module.exports ={createAnnouncement,deleteAnnouncement,updateAnnouncement,getAnnouncement,getUserAnnouncements}