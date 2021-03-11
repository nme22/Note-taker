// import items needed
const fs = require("fs");

module.exports = function (router) {
    let notes = require("../db/db.json")

    // make a GET request with all notes from the database
    router.get('/notes', (req, res) => {
        return res.json(notes)
    })

    // create a post request
    router.post("/api/notes/:id", (req, res) => {
        const id = req.params.id;
    });

    // create a delete request


}