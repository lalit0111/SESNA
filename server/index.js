const express = require('express')
require('./db/mongoose')

// models
const User = require('./models/user')
const Community_brief = require('./models/community_brief')
const Community = require('./models/community')

// routers
const userRouter = require('./routers/user')
const communityBriefRouter = require('./routers/community_brief')
const communityRouter = require('./routers/community')



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(communityBriefRouter);
app.use(communityRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})