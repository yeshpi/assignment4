const express=require('express')
const path=require('path')
const rootDir=require('../utility/path')
const data=require('./home');

const route=express.Router()

route.get('/users',(req,res,next)=>{   
    console.log(data.users);
     res.render('users',{title:'User',userName:data.users,path:'/users'})
  //  res.sendFile(path.join(rootDir,'views','users.html'))
})

module.exports= route