// Basic server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("The server is running at port:5000.");
});

// Login mock-up

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Authentication logic here later on
    // Now it's hardcoded to be 'user' and 'password'
    if (username == 'user' && password == 'password') {
        res.json({ success: true, message: 'Login succesful!' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials. '});
    }
});