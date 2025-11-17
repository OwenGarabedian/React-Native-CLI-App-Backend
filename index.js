const express = require('express');
const cors = require('cors'); 
const router = require('./routes/router');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();

// Use built-in express body parsers
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatues: 200,
};

app.use(cors(corsOptions));
app.use('/', router); // Mount the router

mongoose.connect(process.env.DB_URI)
.then(() => console.log('DB Connected!'))
.catch(err => console.log('ERROR:', err))

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
