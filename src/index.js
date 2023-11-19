const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./routes/users')
const roleRoute = require('./routes/roles')


app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use(userRoute)
app.use(roleRoute)


app.listen(port, () => console.log(`Server is running on port ${port}!`))