
const Post= require('../models/post');
const User = require('../models/user');
// const { populate } = require('../models/post');

module.exports.home=  function(req,res){
    
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err, posts){
        if(err){
            console.log(err)
            console.log("***********")
            return;
        }
        console.log(posts)
      
            return res.render('home',{
           
                posts: posts
          });
        
        
    });

    // try{
    //     let posts = await Post.find({});
    //     console.log(posts);
    //     return res.render("home" , {
    //         posts : posts
    //     })
    // }catch(error){
    //     console.log(error);
    // }
    
}

