var express = require("express")
var router = express.Router()
var User = require("../models/users")  // equivalent to collection in mongoDB , it is require to capture data 




router.get("/" , (req,res)=> {
    User.find({},(err,users)=> {
        if(err) return next(err)
        res.render("users.ejs" , {users:users})
    })
})


router.get("/new" , (req,res)=> {
    res.render("addUser.ejs")
})


router.post("/" , (req,res,next)=> {
    //capture data
    console.log(req.body)

    //save to db
    User.create(req.body , (err, createduser)=> {
        if(err) return next(err)
        res.redirect("/user")
    })
})




router.get("/:id" , (req,res,next)=> {
    var id = req.params.id
    User.findById(id , (err,user)=> {
        if(err) return next(err)
        res.render("userdetail.ejs" , {user:user})
    })
})


router.get("/:id/edit" , (req,res,next)=> {
    //find book detail
     var id = req.params.id
    
    User.findById(id,(err,book)=> {
     if (err) return next(err)
     res.render("editUserForm.ejs" , {user:user})
    })
    //render updated form

})


router.post("/:id" , (req,res,next)=> {
    //capture updated data

    //using id find user and update it with data coming from form
    var id = req.params.id
    User.findByIdAndUpdate(id , req.body , (err, updatedBook)=> {
        
        if (err) return next(err)
        res.redirect("/user")

    })
})


router.get("/:id/delete" , (req,res,next)=> {
    var id = req.params.id
    User.findByIdAndDelete(id , (err,book)=> {
        if(err) return next(err)
        res.redirect("/user")
    }) 
})

module.exports=router