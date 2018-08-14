const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.send('Welcome to your express API');
});
app.get('/api/auth', (req, res) => {
    res.send('Auth');
});

app.listen(8001, () => console.log('App running on port 8001 🔥'));
