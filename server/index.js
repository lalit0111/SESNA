const express = require('express')
require('./db/mongoose')
// const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// app.use(userRouter)

app.get('', (req, res) => {
    res.send(console.log("dfefd"))
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})