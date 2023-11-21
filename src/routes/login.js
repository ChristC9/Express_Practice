const { Router } = require("express");

const router = Router();
const User = require('../database/schemas/User')
const { hashPassword, comparePassword } = require('../utils/helpers')
router.post('/api/login', async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) res.send(400)
    const userDB = await User.findOne({ email })
    if (!userDB) {
        res.send(401)
    } else {
        const isValid = comparePassword(password, userDB.password)
        if (isValid) {
            req.session.user = userDB
            return res.send(200, 'User Logged In')
        } else {
            return res.send(500, 'Invalid Password')
        }
    }
})

router.post('/api/user/register', async (req, res) => {
    const { email } = req.body;
    const userDB = await User.findOne({ email })
    if (userDB) {
        res.send(401, 'User Already Exists')
    } else {
        const password = hashPassword(req.body.password)
        const newUser = new User({ email, password })
        await newUser.save()
        res.send('User Created')
    }
})

module.exports = router;