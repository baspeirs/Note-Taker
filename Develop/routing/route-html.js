// use this file to route the html pages and export them 
// require the path module built into node
const path = require("path");

// export the route
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/index.html"))
    });
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/notes.html"))
    });
}