const express = require('express')
const route = express.Router()
const { checkUserNameAndEmail } = require('../middleware/auth.middleware')
const { signUpController } = require('../controller/auth.controller')
route.get('/', (req, res) => {
    res.send('Hello word')
})

route.post('/sigup', checkUserNameAndEmail, signUpController)

module.exports = route