const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./routes/users')
const roleRoute = require('./routes/roles')
const authRoute = require('./routes/auth')
const cookieParser = require('cookie-parser')
const session = require('express-session')



app.use(express.json());
// app.use(express.urlencoded());
app.use(cookieParser())
app.use(session({
    secret: "FADFEW2123DFKJDKFM7823SDDFLDF",
    resave: false,
    saveUninitialized: false,
}))
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use(userRoute)
app.use(roleRoute)
app.use(authRoute)

app.listen(port, () => console.log(`Server is running on port ${port}!`))