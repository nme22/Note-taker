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
        fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
            if (err) throw err;
            const db = JSON.parse(data);
            const newDB = [];

            db.push(req.body);

            for (let i = 0; i < db.length; i++) {
                const newNote = {
                    title: db[i].title,
                    text: db[i].text,
                    id: i
                };

                newDB.push(newNote);
            }

            fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newDB, null, 2), (err) => {
                if (err) throw err;
                res.json(req.body);
            });
        });
    });

    // create a delete request


}