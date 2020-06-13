// requre dependencies and files needed to operate
const express = require("express");
const path = require("path");

// set variable for app and PORT
const app = express();
const PORT = process.env.PORT || 3000;


// set up data parsing using app.use and convert to json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the files for routing our pages
require("./routing/route-html")(app);
require("./routing/route-api")(app);

// use this to make the assets "static"
app.use("/public", express.static('./public/'));

// now make your server listen
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT)
});