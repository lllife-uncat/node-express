// Import module.
var express = require("express");
var hbs = require("hbs");

// Initiate.
var app = express();

// Setup application.
app.set("view engine", "html");
app.engine("html", hbs.__express);
app.use(express.static("public"));

// Load blogs.
var blogEngine = require("./blog");

// Define routes.
app.get("/", function(req, res) {
    res.render("index", {
        title: "My blog",
        entries: blogEngine.getBlogEntries()
    });
}); 

app.get("/about", function(req, res) {
    res.render("about", { title: "About me" });
});

app.get("/article/:id", function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render("article", {
        title: entry.title,
        blog: entry 
    });
});

// Listen on 3000
app.listen(3000);


