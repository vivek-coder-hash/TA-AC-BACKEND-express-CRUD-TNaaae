var express = require("express")
var mongoose = require("mongoose")
var path = require("path")

//connect to database
mongoose.connect("mongodb://localhost/sample" , {useNewUrlParser:true , useUnifiedTopology:true} , (err)=> {
    console.log(err ? err: "connected to database")
})

//instantiate app
var app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//setup view engine
app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname,"views"))





//Routing middleware
app.use("/user" , require("./routes/user.js"))

//Error handler
app.use((req,res)=>{
    res.send("Page not found")
})

app.use((err,req,res,next)=> {
    res.send(err)
})


//listener
app.listen(4000 , ()=> {
    console.log("server is listening to port 4000")
})