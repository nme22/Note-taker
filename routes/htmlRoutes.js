const path = require("path");
const router = require('express').Router();




router.get('/notes', (req, res) => {
    response.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;