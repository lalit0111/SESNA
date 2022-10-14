const express = require('express')
require('./db/mongoose')

// models
const User = require('./models/user')
const User_brief = require('./models/user_brief')
const Community_brief = require('./models/community_brief')
const Community = require('./models/community')


// routers
const user_router = require('./routers/user')
const user_brief_router = require('./routers/user_brief')
const community_brief_router = require('./routers/community_brief')
const community_router = require('./routers/community')



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(user_router)
app.use(user_brief_router)
app.use(community_brief_router)
app.use(community_router)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})