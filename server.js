// Dependencies
const express = require('express');
const path = require('path');
const fs = require(`fs`);
const api = require(`./routes/index.js`);

// Port information.
const PORT = process.env.PORT || 3001;

// Express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// API routes go here
app.use(`/api`, api)

app.use(express.static(`public`));

// Get * route for index.html
app.get(`*`, (req, res) =>
    res.sendFile(path.join(__dirname, `/public/index.html`))
);

// Get /notes returns notes.html
app.get(`/notes`, (req, res) =>
res.sendFile(path.join(__dirname, `/public/notes.html`))
);

// Server Listen
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);