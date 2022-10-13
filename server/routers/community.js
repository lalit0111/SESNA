const express = require('express')
const moment = require('moment')
const Community = require('../models/community')
const Community_brief = require('../models/community_brief')
const router = new express.Router()


router.post('/community', async(req, res) => {
    const community = new Community(req.body)
    // console.log(community._id)
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


router.get('/community', async(req, res) => {
    try {
        const community = await Community.find({})
        res.send(community)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router