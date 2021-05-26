const db = require('../Models')
const User = db.user

module.exports.checkUserName = (req, res, next) => {
    const { username } = req.body
    //Check Database username and password
    try {
        const user = User.findOne({ username })
        if (user) return res.status(401).json({
            success: false,
            message: 'username and / or password is exits'
        })
        next()
    } catch (error) {
        console.log(error)
    }

    next()
}

