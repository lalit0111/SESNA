const express = require('express')
const User = require('../models/user');
const User_brief = require('../models/user_brief');
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/user/signup',async(req,res)=>{
    const user= new User(req.body)
    try{
        await user.save()
        const token= await user.generate_authtoken()
        res.status(201).send({user,token})

        let brief_user=req.body;
        delete brief_user.tokens;
        delete brief_user.is_admin;
        delete brief_user.is_public;
        delete brief_user.personal_detail.dob;
        delete brief_user.personal_detail.phone;
        delete brief_user.personal_detail.location;
        delete brief_user.personal_detail.email;
        delete brief_user.personal_detail.password;
        brief_user.personal_detail['user_id']=user._id.toHexString();
        
        const user_brief = new User_brief(brief_user);
        user_brief.save().then(()=>{
            console.log("saved");
        }).catch((error)=>{
            res.status(400).send(error)
        })

    }
    catch(e)
    {
        res.status(400)
        res.send(e)
    }
})

router.post('/user/login', async(req, res) => {
    try{
        const user=await User.findbycredentials(req.body.email,req.body.password)
        const token = await user.generate_authtoken()
        res.send({user , token})
    }catch(e){
        res.status(400)
        res.send(e)
    }
})


router.post('/user/logout', auth , async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token!=req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.send(500).send(e)
    }
})

router.post("/users/logoutall", auth , async(req,res)=>{
    try{
        req.user.tokens=[]
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})


router.get('/users/me', auth , async(req,res)=>{
    res.send(req.user)
})

// router.get('/get_all_user', async(req, res) => {
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router