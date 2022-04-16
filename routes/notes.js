const notes = require('express').Router();
// Generates a unique id. npm package.
const uniqid = require(`uniqid`);

// GET route to read db.json and return all saved notes as JSON

// POST route to receive new note to save on the request body, add to db.json file, and retun the new note to the client. Give each note a unique id when saved.


module.exports = notes;
