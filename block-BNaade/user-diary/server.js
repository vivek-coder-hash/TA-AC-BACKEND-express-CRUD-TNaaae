var express = require("express")
var logger = require("morgan")
var mongoose = require("mongoose")
var path = require("path")

mongoose.connect("mongodb://localhost/sample" , {useNewUrlParser:true , useUnifiedTopology:true} , (err)=> {
    console.log(err ? err : "connect to database")
})

// instantiate app
var app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// setup view engine middleware
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"))


//Routing middlewares
app.use("/users" , require("./routes/user"))

//Error handling
app.use((err,req,res)=> {
    res.send("page not found")
})

app.use((err ,req,res,next)=> {
    res.send(err)
})

//listener
app.listen(5000 , ()=> {
    console.log("server is listening to port 5000")
})