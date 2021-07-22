var express = require("express")
var router = express.Router()
var User = require("../models/user")

router.get("/new" , (req,res)=> {
    //render the create form
    res.render("userForm.ejs")
})

router.post("/" , (req,res)=> {
    //capture form data
    User.create(req.body, (err , user)=> {
        if (err) return res.redirect("/users/new") //if error, return back to users create form
        res.redirect("/")   //if success, return index page i.e. "/" path
    })
})


router.get("/:id" , (req,res)=> {
    //single user detail
    res.render("singleUser.ejs")
})


router.get("/:id" , (req,res)=> {
    //edit form
})

router.put("/:id" , (req,res)=> {
    //capture the data from the updated form
})

router.delete("/:id" , (req,res)=> {
    //delete that user
})



module.exports = router