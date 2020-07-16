
const Post=require('../models/post') 

module.exports.post=function(req,res){
    return res.end('<h1>View Kunals Post here  </h1>');

}


module.exports.create= function(req,res){
    //setting the values to database 
    Post.create({
        content: req.body.content,
        user:req.user._id 
    },function(err,post){    
        if(err){console.log('error in creating a post'); return ;}

        return res.redirect('back');
    });

}
