const notes = require('express').Router();
// Generates a unique id. npm package.
const uniqid = require(`uniqid`);

// GET route to read db.json and return all saved notes as JSON
notes.get(`/`, (req, res) =>

);

// POST route to receive new note to save on the request body, add to db.json file, and retun the new note to the client. Give each note a unique id when saved.
notes.post(`/`, (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title: title,
            text: text,
            id: uniqid(),
        }
        // Append newNote to db.json
        
        res.json(`Note added successfully 🚀`);
    } else {
        res.error(`Error in adding note`);
    }
})

module.exports = notes;
