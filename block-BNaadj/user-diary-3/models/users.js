/*Since we are going to save user data into database , create a user schema(inside models directory) with fields:

name
email
age
bio */

var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    age:Number,
    bio:String,
    hobbies:[String]
}, {timestamps:true})


var User = mongoose.model("User" , userSchema)
module.exports =User