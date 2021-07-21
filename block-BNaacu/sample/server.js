var express = require("express")
var logger = require("morgan")
var mongoose = require("mongoose")
var path = require("path")


mongoose.connect("mongodb://localhost/sample" , { useNewUrlParser: true , useUnifiedTopology:true } , (err)=> {
    console.log(err ? err : "connect to database")
})

//instantiate app

var app = express()

//middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routing middlewares
app.use("/students" , require("./routes/students"))


//setup view engine middleware
app.set("view enjine" , "ejs")
app.set("views" , path.join(__dirname+"/views"))


//Error handler middleware
app.use((err ,req,res,next)=> {
    res.send(err)
})


//listener
app.listen(4000 , ()=> {
    console.log("server is listening to port 4000")
})