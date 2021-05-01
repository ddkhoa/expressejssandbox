// require libraries
const path = require("path");
const express = require("express");
const ejs = require("ejs");

// initiate express app
const app = express();

// config express app
app.set("view engine", "ejs"); // express use ejs as view engine
app.set("views", path.join(__dirname, "views")); // express use ejs files in "view" folder to render html
app.use('/', express.static("public")); // express serve static files (css, js...) in "public" folder
// to include the stylesheet at public/css/style.css, we use  <link rel="stylesheet" href="/css/style.css">
// to include the script at public/script/script.js, we use <script src="/script/script.js"></script>

app.get('/', function (req, res) {
    res.render("index"); // the index.ejs file in "views" folder is using to render
});

app.get('/notfound', function (req, res) {
    res.render("notfound"); // error, we don't have notfound.ejs find in views folder
})
app.listen(80, function () { console.log("Server is listening on port 80. Visit : http://localhost") });