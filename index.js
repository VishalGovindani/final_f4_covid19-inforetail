const express = require('express');
let app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


var Schema = mongoose.Schema;
var url = "mongodb+srv://vishalgov:Vishal0%401@cluster0.x8nio.mongodb.net/first?authSource=admin&replicaSet=atlas-6yy6px-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(url,{useNewUrlParser:true});

app.use (bodyParser.urlencoded({extended:true}));

// var create schema
var  mySchema = new mongoose.Schema({
    email : String,
    query : String
});

var feedback = new mongoose.Schema({
    name : String,
    phone : Number,
    email : String,
    date : Date,
    gender : String,
    age : Number,
    vaccine : String,
    about : String
});

var bill = new mongoose.Schema({
    name:String,
    email:String,
    adddress:String,
    qty:Number
});

var  contact = mongoose.model ('contact',mySchema);

var feedback_form = mongoose.model ('feedback_form',feedback);

var N95_125 = mongoose.model ('N95_125',bill);


app.post ('/contact',(req,res)=>{
    var info={
        email: req.body.email,
        query: req.body.query
    };
    var me = new contact (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect('/response')
})



app.post ('/feedback',(req,res)=>{
    var info={
       name:req.body.name,
       phone:req.body.phone,
       email:req.body.email,
       date:req.body.date,
       gender:req.body.gender,
       age:req.body.age,
       vaccine:req.body.vaccine,
       about:req.body.about
    };
    var me = new feedback_form (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect('/response')
})

app.post ('/market/product/product1',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new N95_125 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/")
})



app.use(express.static( 'public'));




app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

app.get("/", (req,res) => {
    res.redirect("/home");
})
app.get("/home", (req,res) => {
    res.render("index.html");
})
app.get("/about", (req, res) => {
    res.render('about.html');
})
app.get("/contact", (req, res) => {
    res.render('contact.html');
})
app.get("/intro", (req, res) => {
    res.render('intro.html');
})
app.get("/innovation", (req, res) => {
    res.render('innovation.html');
})
app.get("/Precaution", (req, res) => {
    res.render('Precaution.html');
})
app.get("/vaccines", (req, res) => {
    res.render('vaccines.html');
})
app.get("/causes&symptoms", (req, res) => {
    res.render('causes&symptoms.html');
})
app.get("/response", (req, res) => {
    res.render('response.html');
})
app.get("/market", (req, res) => {
    res.render('market.html');
})
app.get("/market/product", (req, res) => {
    res.render('product.html');
})
app.get("/market/product/product1", (req, res) => {
    res.render('product1.html');
})
app.get("/market/product/product2", (req, res) => {
    res.render('oxi.html');
})
app.get("/feedback", (req, res) => {
    res.render('feedback.html');
})

app.get("/ordered/:id/:qty/:addr", (req, res) => {
   
    res.render('ordered.html',{Name:req.params.id,quantity:req.params.qty,ADDR:req.params.addr});
})

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Server Started!!!");
})