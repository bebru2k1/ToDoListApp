require('dotenv').config()
const express = require('express')
const app = express()
const authRoute = require('./routes/auth.route')
const db = require('./Models')

const PORT = process.env.PORT || 3000

app.use(express.json())
//Connect Db
db.connect()

app.use('/v1/api/auth', authRoute)

app.listen(PORT, () => {
    console.log('Server Connect Success 😅😅😅')
})