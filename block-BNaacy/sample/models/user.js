var mongoose =require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema({
    name:{type:String , required:true} ,
    email:String,
    age:Number
}, {timestamps:true})


var User =mongoose.model("User" , userSchema) // name of model is User which is based on schema named userSchema
module.exports=User