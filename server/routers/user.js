const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/user', (req, res) => {
    const user = new User(req.body);

    user.save().then(()=>{
        res.send(user)

    }).catch((error)=>{
        res.status(404)
        res.send(error);
    })
})
router.get('/user', async(req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router