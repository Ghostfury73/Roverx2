//======================================================================================================================================================//
//																		IMPORTS
//======================================================================================================================================================//
var express           	  = require("express"),
	app                   = express(),
	bodyParser            = require("body-parser"),
	async    			  = require("async"),
	nodemailer            = require("nodemailer")

//======================================================================================================================================================//
//																	ENVIRONMENT SETUP
//======================================================================================================================================================//
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//======================================================================================================================================================//
//																		ROUTES
//======================================================================================================================================================//
//	ROOT ROUTE
//------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//
app.get("/", function(req, res){
	console.log("GET: /");
    res.render("index");
});

app.get("/rovers", function(req, res){
    console.log("GET: /rovers")
    res.render("rovers/rovers")
})

app.get("/competitions", function(req, res){
    console.log("GET: /competitions")
    res.render("competitions/competitions")
})

app.get("/team/current", function(req, res){
    console.log("GET: /team/current")
    res.render("team/team2020")
})

app.get("/team/team2019", function(req, res){
    console.log("GET: /team/team2019")
    res.render("team/team2019")
})

app.get("/team/team2018", function(req, res){
    console.log("GET: /team/team2018")
    res.render("team/team2018")
})

app.get("/team/team2017", function(req, res){
    console.log("GET: /team/team2017")
    res.render("team/team2017")
})

app.get("/team/team2016", function(req, res){
    console.log("GET: /team/team2016")
    res.render("team/team2016")
})

app.get("/team/team2015", function(req, res){
    console.log("GET: /team/team2015")
    res.render("team/team2015")
})

app.get("/media", function(req, res){
    console.log("GET: /media")
    res.render("media/media")
})

app.get("/sponsors", function(req, res){
    console.log("GET: /sponsors")
    res.render("sponsors/sponsors")
})

app.get("/contact", function(req, res){
    console.log("GET: /contact")
    res.render("contact/contact")
})

//======================================================================================================================================================//
//																		  SERVER
//======================================================================================================================================================//
app.listen(process.env.PORT || 3000, function(){
	console.log("server initialised.");
});