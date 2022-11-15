const express = require('express');
const moment = require('moment');
const Community = require('../models/community');
const Community_brief = require('../models/community_brief');
const multer = require('multer');
const sharp = require('sharp');
const router = new express.Router()


router.post('/create_community',async(req, res) => {
    const community = new Community(req.body)
    
    const time = community._id.getTimestamp()
    const tt=moment(time).format('l')

    community.save().then(()=>{
        res.send(community)

    }).catch((error)=>{
        res.status(404)
        res.send(error);
    })

    var creation_date = ''
    creation_date+=tt[6]
    creation_date+=tt[7]
    creation_date+=tt[8]
    creation_date+=tt[9]
    creation_date+='/'
    creation_date+=tt[0]
    creation_date+=tt[1]
    creation_date+='/'
    creation_date+=tt[3]
    creation_date+=tt[4]

    let obj = req.body.community_brief
    obj['creation_date']=creation_date.toString();
    obj['community_id']=community._id.toHexString();

    // console.log(obj);

    const community_brief= new Community_brief(obj)

    community_brief.save().then(()=>{
        console.log("saved");
    }).catch((error)=>{
        res.status(404)
        res.send(error)
    })

    
})


router.get('/get_all_community', async(req, res) => {
    try {
        const community = await Community.find({})
        res.send(community)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/community_by_id' , async(req,res)=>{
    try{
        const community = await Community.findById(req.body.id)
        if(!community)
        {
            throw new Error()
        }
        res.send(community)
    }
    catch(e){
        res.status(404).send(e)
    }
})


const upload = multer ({
    limits :{
        fileSize : 5000000
    },
    fileFilter(req, file , cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png|JPG)$/)){
            return cb(new Error('please upload an image'))
        }

        cb(undefined, true)
    }
})

router.patch('/community/picture', upload.single('community_dp'), async (req, res) => {
    console.log(req.body)
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    const community = await Community.findById(req.body.id)
    community.community_brief.community_dp=buffer
    await community.save()
    res.send()
   
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router