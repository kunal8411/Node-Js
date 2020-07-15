const express= require('express');
const path= require('path');
const app= express();
const Post= require('../models/post');

app.set('views',path.join(__dirname,'views'));
//home is a action name whic is to be perforemed 
//this home we will import on perticular route like /home,/profile
app.set('view engine','ejs');
module.exports.home= function(req,res){
      //find the posts in db(Post) 
    Post.find({},function(err,posts){
        return res.render('../views/home',{
        
            //send posts data as a reference keyword(posts), second post is in function call 
            posts:posts
        });
    })
    
}


// module.exports.profile= function(req,res){
//     return res.end('<h1>My Profile is loading, please wait </h1>')
// }
