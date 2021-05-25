const db = require('../Models')
const User = db.user
module.exports.checkUserNameAndEmail = (req, res, next) => {
    const { username, email } = req.body
    //Check Database username and password
    Promise.all([User.findOne({ username }), User.findOne({ email })]).then(([userHasName, userHasEmail]) => {
        if (userHasName || userHasEmail) return res.status(403).json({ success: false, message: 'username or/and adlrealy exist' })

        next()
    })



}