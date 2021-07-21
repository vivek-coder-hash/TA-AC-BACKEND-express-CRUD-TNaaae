var express = require("express")
var logger = require("morgan")
var path = require("path")


var app =express()
//middleware for engine setup
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname+"/views"))

app.get("/" , (req,res)=> {
    res.render("index.ejs" , {name: "Ram" , place:"Ayodhya"})
})

app.listen (3000 , ()=> {
    console.log("server listening to port 3000")
})