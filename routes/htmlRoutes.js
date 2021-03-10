const path = require("path");
const fs = require("fs");


app.get('/', (req, res) => {
    response.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('/notes', (req, res) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});