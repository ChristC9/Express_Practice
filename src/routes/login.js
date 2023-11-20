const { Router } = require("express");

const router = Router();
const User = require('../database/schemas/User')

router.post('/api/login', (req, res) => {

    const { username, password } = req.body;
    console.log(username, password)
    if (username && password) {
        if (req.session.user) {
            res.send(req.session.user)
        } else {
            req.session.user = {
                username
            }
            res.send(req.session.user)
        }
    } else {
        res.send(401)
    }

})

router.post('/api/user/register', async (req, res) => {
    const { username, password, email } = req.body;
    const userDB = await User.findOne({ $or: [{ username }, { email }] })
    if (userDB) {
        res.send(401, 'User Already Exists')
    } else {
        const newUser = new User({ username, password, email })
        await newUser.save()
        res.send('User Created')
    }
})

module.exports = router;