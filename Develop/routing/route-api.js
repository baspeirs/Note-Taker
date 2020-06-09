// use this file to route the api and export it 
const noteData = require("../db/db.json");

module.exports = app => {
    app.get("/api/notes", (req, res) => {
        res.json(noteData)
    });

    app.post("/api/notes", (req, res) => {
        noteData.push(req.body)
    });

    app.delete("/api/notes/:id", (req, res) => {
        const requestId = req.params.id;

        let note = noteData.filter(note => {
            return note.id == requestId;
        })[0];

        const index = noteData.indexOf(note);

        noteData.splice(index, 1);

        res.json({ message: `User ${requestId} deleted!`})
    })
}