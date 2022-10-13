const express = require('express')
const User_brief = require('../models/user_brief')
const User_brief = require('../models/user_brief')
const router = new express.Router()


router.post('/user_brief', async(req, res) => {
    try {
        const user_brief = await User_brief.find({})
        res.send(user_brief)
    } catch (e) {
        res.status(500).send()
    }
})


router.get('/user_brief', async(req, res) => {
    try {
        const user_brief = await User_brief.find({})
        res.send(user_brief)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router