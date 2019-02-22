// set up
const express = require("express"),
    app = express(),
    port = 3000;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


// routes
app.get("/", (req, res) => res.render("landing"))



app.listen(port, () => console.log("Server running at http://localhost:3000/"));