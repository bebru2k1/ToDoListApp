
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')
const db = require('../Models')
const User = db.user

module.exports.sigUpController = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res
        .status(400)
        .json({ success: false, message: 'Missing username and/or password' })
    try {
        const hashPassword = await argon2.hash(password)
        const newUser = new User({
            username,
            email,
            password: hashPassword
        })

        await newUser.save()
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET)

        res.status(200).json({
            success: true,
            message: 'Save user Success',
            accessToken
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports.sigInController = async (req, res) => {
    try {
        const { username, password } = req.body
        // if username or password havenot
        if (!username || !password) return res.status(401).json({
            success: false,
            message: 'username or/and password has aldreay'
        })
        //if have username and password
        const user = await User.findOne({ username })
        if (!user) return res
            .status(400)
            .json({ success: false, message: 'Incorrect username or password' })

        const decodePassword = await argon2.verify(user.password, password)
        if (!decodePassword) return res.status(401)
        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET
        )

        res.json({
            success: true,
            message: 'User logged in successfully',
            accessToken
        })
    } catch (error) {
        console.log(error)
    }
}