var express = require("express")
var router = express.Router()



//create student form => GET request on "/students/new"
router.get("/new" , (req,res)=> {
    res.render("studentform.ejs")
})



//create a student => POST request on "/students" route
router.post("/" , (req,res)=> {
 console.log(req.body)
 res.json(req.body)
})


/*list all students => GET request on "/students" route

render an ejs template
pass array of students to template as second argument like
res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
display list using <% list.forEach(l => {}) %> */
router.get("/" , (req,res)=> {
   res.render("index.ejs" , { list: ["ankit", "suraj", "prashant", "ravi"] })
})


/*get single student details => GET request on "/students/:id"

render an ejs template
pass a student object to template for displaying student data */

router.get("/:id" , (req,res)=> {
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@altcampus.io" },
      });
})



module.exports=router