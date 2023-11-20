const { Router } = require("express");

const router = Router();



router.post('/api/auth/post', (req, res) => {
    const { username, password } = req.body;
    const auth = { username, password }

    const authSession = req.session
    if (authSession) {
        // const { authUser } = authSession
        authSession.authUser = [auth]
        console.log(authSession)
    } else {
        req.session.authSession = {
            authUser: [auth]
        }
    }
    res.send(201).send('User Created')
})


router.get('/api/auth/post/get', (req, res) => {
    const authSes = req.session
    // const { authUser } = req.session 
    console.log(authSes)
    if (!authSes) {
        res.send('No Session For You')
    } else {
        res.send(authSes.authUser)
    }
})



module.exports = router;