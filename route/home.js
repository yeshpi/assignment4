const express=require('express')
const path=require('path')
const rootDir=require('../utility/path')
const route=express.Router()
const users=[]

route.get('/',(req,res,next)=>{
       res.render('home',{title:'Home',path:'/'})
})
route.post('/add-users',(req,res,next)=>{
   // console.log(req.body);
    
users.push({firstName:req.body.familyname})
res.redirect('/users')

})

exports.route= route
exports.users=users