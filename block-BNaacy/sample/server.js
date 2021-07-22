var express = require("express")
var mongoose = require("mongoose")
var path = require("path")

//connect to database
mongoose.connect("mongodb://localhost/user" , {useNewUrlParser:true , useUnifiedTopology:true} , (err)=> {
    console.log(err ? err:"connected to database")
})


//instantiate app
var app = express()


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//setup view engine
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname,"views"))

// routing middlewares

app.use("/users" , require("./routes/users"))

//Error handler
app.use((req,res,next)=> {
    res.send("page not found")
})

app.use((err,req,res,next)=> {
    res.send(err)
})