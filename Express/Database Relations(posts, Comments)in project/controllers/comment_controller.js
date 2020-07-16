const Comment= require('../models/comment');

const Post= require('../models/post');

module.exports.create= function(req,res){
    //this post i have mentioned in home.ejs comment form in name attribute
    Post.findById(req.body.post,function(err,post){
        //if post find then we will add comment schema 
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user:req.user._id
    
            },function(err,comment){
                if(err){
                    console.log('error found in creating schema for comments');
                    return;
                }

                //update the post database, and save it
                //every time when we update the db, we need to save it
                post.comments.push(comment);
                post.save();

                res.redirect('/');
            });
           
        }
    });
}
