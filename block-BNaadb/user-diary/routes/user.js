var express = require("express")
var router = express.Router()
var User = require("../models/users")


router.get("/" , (req,res,next)=> {
    //handle action
    //fetch data 
    User.find({} , (err,users)=> {
        if (err) return next(err)
        res.render("user.ejs", {usersKey:users})
    })
})

router.get("/new" , (req,res)=> {
    //render create form
    res.render("userForm.ejs")
})

router.post("/" , (req,res)=> {
    //capture data
    User.create(req.body , (err,user)=> {
        if(err) return res.redirect("/users/new")
        res.redirect("/")
    })
})

router.get("/:id" , (req,res)=> {
    //single user detail
    var id = req.params.id
    User.findById(id,(err,user)=> {
        if (err) return next(err)
        res.render("singleUser.ejs" , {user:user})
    })
})





router.get("/:id/edit" , (req,res ,next)=> {
    //edit form
    var id =req.params.id
    User.findById(id,(err,user)=>{
        if (err) return next(err)
        res.render("userEdit.ejs" , {user:user})
    })
    //render updated form
})

router.post("/:id" , (req,res,next)=> {
    // capture updated form
    //using id find using and update it with data coming from form
    var id = req.params.id
     User.findByIdAndUpdate(id , req.body , (err,updateduser)=> {
         
         if(err) return next(err)
         res.redirect("/users")
     })

    
})


router.delete("/:id/delete" , (req,res,next)=> {
    //delete user
    var id = req.params.id
    User.findByIdAndDelete(id , (err,user)=> {
        if(err) return next(err)
        res.redirect("/users")
    })
})


module.exports=router