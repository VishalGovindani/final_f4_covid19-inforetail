const express = require('express');
let app = express();

app.use(express.static( 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

app.get("/home", (req,res) => {
    res.render("index.html");
})
app.get("/about", (req, res) => {
    res.render('about.html');
})

app.get("/contact", (req, res) => {
    res.render('contact.html');
})
app.listen(8080, () => {
    console.log("Server Started!!!");
})