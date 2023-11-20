const { Router } = require('express');

const router = Router();

router.use((req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.send(401).send('Unauthorized')
    }
})
const roles = [
    {
        id: 1,
        name: "Founder"
    },
    {
        id: 2,
        name: "CTO"
    },
    {
        id: 3,
        name: "Project Architect"
    },
    {
        id: 4,
        name: "Project Manager"
    },
    {
        id: 5,
        name: "Software Engineer"
    }
]

router.get('/api/roles/get', (req, res) => {
    res.send(roles)
})

module.exports = router;