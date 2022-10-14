const express = require('express')
const User = require('../models/user');
const User_brief = require('../models/user_brief');
const router = new express.Router()


router.post('/login', (req, res) => {
    const user = new User(req.body);

    user.save().then(()=>{
        res.send(user)

    }).catch((error)=>{
        res.status(404)
        res.send(error);
    })

    //console.log(user);
    ///console.log("abc");
    let brief_user=req.body;
    delete brief_user.is_admin;
    delete brief_user.is_public;
    delete brief_user.personal_detail.dob;
    delete brief_user.personal_detail.phone;
    delete brief_user.personal_detail.location;
    delete brief_user.personal_detail.email;
    delete brief_user.personal_detail.password;
    brief_user.personal_detail['user_id']=user._id.toHexString();
    //console.log(brief_user);


    const user_brief = new User_brief(brief_user);
    user_brief.save().then(()=>{
        console.log("saved");
    }).catch((error)=>{
        res.status(404)
        res.send(error)
    })

})
router.get('/get_all_user', async(req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router