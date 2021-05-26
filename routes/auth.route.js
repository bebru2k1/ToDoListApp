const express = require('express')
const route = express.Router()
const { checkUserName } = require('../middleware/auth.middleware')
const { sigUpController, sigInController } = require('../controller/auth.controller')
route.get('/', (req, res) => {
    res.send('Hello word')
})
// @POST /v1/api/auth/sigup
// @des sigup user
// Public
route.post('/sigup', checkUserName, sigUpController)

// @POST /v1/api/auth/sigin
// @des sigin user
// Public
route.post('/sigin', sigInController)



module.exports = route