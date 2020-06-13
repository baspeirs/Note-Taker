// use this file to route the api and export it 
const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path")

module.exports = app => {
    app.get("/api/notes", (req, res) => {
        res.json(noteData)
    });

    app.post("/api/notes", (req, res) => {
        noteData.push(req.body)
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteData), (err) => {
            if (err) console.log(err)
        });
        return res.json(noteData);
    });

    app.delete("/api/notes/:id", (req, res) => {
        const requestId = req.params.id;

        let note = noteData.filter(note => {
            return note.id == requestId;
        })[0];

        const index = noteData.indexOf(note);

        noteData.splice(index, 1);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteData), (err) => {
            if (err) console.log(err)
        });

        res.json({ message: `User ${requestId} deleted!`})
    })
}