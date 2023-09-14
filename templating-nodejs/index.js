const express = require("express");
const path = require("path")
const app = express();

//specifying the render engine 
app.set("view engine", "ejs");
//adding this so that we can load all files from the public folder 
app.use(express.static(path.join(__dirname, "public")));

// This is what is "routing"
app.get("/", (req, res) => {
    res.render("index"); // index refers to index.ejs
   });

app.listen(3000, () => {
  console.log("server started on port 3000");
});