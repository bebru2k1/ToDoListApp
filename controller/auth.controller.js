const argon2 = require('argon2')
module.exports.sigUpController = async (req, res) => {
    const { username, email, password } = req.body
    const newUser = {
        username,
        email,
        password: argon2.hash(password)
    }


}