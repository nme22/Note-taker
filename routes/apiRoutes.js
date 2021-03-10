// import items needed
const router = require('express').Router();
const store = require('../db/store')

// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
})

// create a post request
router.post("/api/notes", (req, res) => {
    const freshNote = req.body;
    if (notes.length === 0) {
        freshNote.id = 1
    } else {
        freshNote.id = (notes[notes.length - 1].id + 1);
    }
})

// create a delete request


module.exports = router;