// import items needed
const fs = require("fs");

module.exports = function (router) {
    let notes = require("../db/db.json")

    // make a GET request with all notes from the database
    router.get('/notes', (req, res) => {
        return res.json(notes)
    });

    // create a get request by id
    router.get("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        let found;
        notes.forEach(n => {
            if (id == n.id) {
                found = n;
                return res.json(n)
            }
        })
        return res.json(false)
    });


    // create a post request for the notes
    router.post("/api/notes", (req, res) => {

    })
    // create a delete request


}