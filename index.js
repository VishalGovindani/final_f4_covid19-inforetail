const express = require('express');
let app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


var Schema = mongoose.Schema;
var url = "mongodb+srv://vishalgov:Vishal0%401@cluster0.x8nio.mongodb.net/first?authSource=admin&replicaSet=atlas-6yy6px-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(url,{useNewUrlParser:true});

app.use (bodyParser.urlencoded({extended:true}));

let values = {
    "prod1" : 125,
    "prod2" : 500
}
function getValue(name){
    return values[name];
}



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

var san_500 = mongoose.model('san_500',bill);

var oxi_800 = mongoose.model('oxi_800',bill);

var irthermo_1200 = mongoose.model('irthermo_1200',bill);

var auto_spray_1145 = mongoose.model('auto_spray_1145',bill);

var gloves_275 = mongoose.model('gloves_275',bill);

var spray_349 = mongoose.model('spray_349',bill);

var wipes_30 = mongoose.model('wipes_30',bill);

var thermo_189 = mongoose.model('thermo_189',bill);

var mask_50 = mongoose.model('mask_50',bill);




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
    res.redirect('/feed-response')
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
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + '125' )
})

app.post ('/market/product/product2',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new san_500 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "500")
})


app.post ('/market/product/product3',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new oxi_800 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "800")
})


app.post ('/market/product/product4',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new irthermo_1200 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "1200")
})


app.post ('/market/product/product5',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new auto_spray_1145 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "1145")
})


app.post ('/market/product/product6',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new gloves_275 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "275")
})


app.post ('/market/product/product7',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new spray_349 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "349")
})


app.post ('/market/product/product8',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new wipes_30 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "30")
})


app.post ('/market/product/product9',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new thermo_189 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "189")
})


app.post ('/market/product/product10',(req,res)=>{
    var info={
        name:req.body.name,
        email: req.body.email,
        adddress: req.body.adddress,
        qty:req.body.qty
    };
    var me = new mask_50 (info);
    me.save(function (err){
        if (err){
            console.log('error occured');
            
        }
        else{
            console.log('Done!');
        }
    });
    res.redirect("/ordered/" + info.name + "/" + info.qty + "/" + info.adddress + "/" + "50")
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
app.get("/market/product1", (req, res) => {
    res.render('product1.html');
})
app.get("/market/product/product1", (req, res) => {
    res.render('p1mask.html');
})
app.get("/market/product/product2", (req, res) => {
    res.render('p2san.html');
})
app.get("/market/product/product3", (req, res) => {
    res.render('p3oxi.html');
})
app.get("/market/product/product4", (req, res) => {
    res.render('p4irthermo.html');
})
app.get("/market/product/product5", (req, res) => {
    res.render('p5auto-spray.html');
})
app.get("/market/product/product6", (req, res) => {
    res.render('p6gloves.html');
})
app.get("/market/product/product7", (req, res) => {
    res.render('p7spray.html');
})
app.get("/market/product/product8", (req, res) => {
    res.render('p8wipes.html');
})
app.get("/market/product/product9", (req, res) => {
    res.render('p9thermo.html');
})
app.get("/market/product/product10", (req, res) => {
    res.render('p10mask1.html');
})
app.get("/feedback", (req, res) => {
    res.render('feedback.html');
})
app.get("/feed-response", (req, res) => {
    res.render('feedres.html');
})

app.get("/ordered/:id/:qty/:addr/:pri", (req, res) => {
    //retrive from mongo
    res.render('ordered.html',{
        Name        : req.params.id,
        quantity    : req.params.qty,
        ADDR        : req.params.addr,
        price       : req.params.pri    
    });
})

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Server Started!!!");
})