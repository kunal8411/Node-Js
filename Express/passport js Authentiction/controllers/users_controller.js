//used to import database
const User=require('../models/user');





module.exports.profile=function(req,res){
    return res.render('../views/users_profile');

    // if(req.cookies.user_id){
    //     User.findById(req.cookies.user_id,function(err,user){
    //         if(user){
                
    //             return res.render('users_profile',{
    //                 title:"user Profile",
    //                 user:user
    //             });

    //         }
    //         return res.redirect('/users/login');
    //     });
    // }
    // else{
    //     return res.redirect('/users/login')
    // }
    //
}


module.exports.login=function(req,res){
    //if user is already loged in then he will not able to go to login page
    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }

    return res.render('../views/login');

}


module.exports.signup=function(req,res){
    //if user is already loged in then he will not able to go to signup page
    if(req.isAuthenticated()){
       return res.redirect('/users/profile')
    }

    return res.render('../views/signup');
    
}



//get the sign up data 
module.exports.create= function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');

    }  

    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(!user){
            User.create(req.body, function(err,user){
                if (err){console.log('error in creating user while signing up');  return }


                return res.redirect('/users/login'); 
            })
        }
        else{
            return res.redirect('back'); 
        }
    });

}


//for login page, validate login information of user,
//after login successfull, redirect to home page 
module.exports.creteSession= function(req,res){

    return res.redirect('/'); 
     
}

//sign-out controller
module.exports.destroySession= function(req,res){
    //this is by default method provided by passoport 
    req.logout();

    return res.redirect('/');
}




// module.exports.delete= function(req,res){
//     id= req.query.id;
    
//     if(id==req.cookies.email){
//         res.clearCookie(req.cookies.email);
//     }
//     return res.redirect('/users/login'); 

// }
