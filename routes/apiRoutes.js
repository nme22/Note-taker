// import items needed
const fs = require("fs");

module.exports = function (router) {
    let notes = require("../db/db.json")

    // make a GET request with all notes from the database
    router.get('/notes', (request, response) => {
        return response.json(notes)
    });

    // create a get request by id
    router.get("/api/notes/:id", (request, response) => {
        const id = request.params.id;
        let find;
        notes.forEach(n => {
            if (id == n.id) {
                find = n;
                return response.json(n)
            }
        })
        return response.json(false)
    });


    // create a post request for the notes
    router.post("/api/notes", (request, response) => {
        const freshNote = request.body;
        if (notes.length === 0) {
            freshNote.id = 1
        } else {
            freshNote.id = (notes[notes.length - 1].id + 1);
        }
        notes.push(freshNote);
        let jsonNotes = JSON.stringify(notes)
        fs.writeFile("./db/db.json", jsonNotes, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        })
        response.json(true)
    })



    // create a delete request
    router.delete("/api/notes/:id", (request, response) => {
        const id = request.params.id;
        notes.forEach((n, index) => {
            if (id == n.id) {
                notes.splice(index, 1)
                const notesCopy = notes.slice();
                let jsonNotes = JSON.stringify(notesCopy)
                fs.writeFile("./db/db.json", jsonNotes, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Successfully deleted!");
                })

            }
        })
        response.json(true);
    })
}