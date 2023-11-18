const express = require('express');
const app = express();
const port = 3000;

const users = [
    {
        id: 1,
        name: "John",
        age: 31,
        city: "New York"

    },
    {
        id: 2,
        name: "Chris",
        age: 23,
        city: "Boston"

    },
    {
        id: 3,
        name: "James",
        age: 23,
        city: "London"

    },
]

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {

    // let user = {
    //     name: 'John',
    //     age: 31,
    //     city: 'New York'
    // }
    res.send(users)
})

app.get('/api/get/:id', (req, res) => {
    const id = req.params.id;

    const unique_user = users.find(user => user.id == id);
    if (unique_user) {
        res.send(unique_user);
    } else {
        res.send("User not found");
    }
})


app.post('/api/post/', (req, res) => {

    console.log(req.body);
    users.push(req.body);
    res.send(`StatusCode: ${res.statusCode}`);
})


app.listen(port, () => console.log(`Server is running on port ${port}!`))