var express = require("express")
var router = express.Router()


router.get("/" , (req,res)=> {
    //handle action
    res.render("user.ejs")
})

router.post("/" , (req,res)=> {
    //capture data
})

router.get("/:id" , (req,res)=> {
    //single user detail
})


router.get("/new" , (req,res)=> {
    //render create form
    res.render("userForm.ejs")
})


router.get("/:id/edit" , (req,res)=> {
    //edit form
})

router.put("/:id" , (req,res)=> {
    // capture updated form
})


router.delete("/:id" , (req,res)=> {
    //delete user
})


module.exports=router