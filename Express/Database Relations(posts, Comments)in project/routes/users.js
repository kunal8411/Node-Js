const express = require('express');


const router = express.Router();


const passport= require('passport');

var userController = require('../controllers/users_contoller');


//when we hit "localhost:8000/users/profile" in url this code will run 
//passport.checkAuthentication-> profile page is only visible when user will log in with correct creds
router.get('/profile',passport.checkAuthentication, userController.profile);


router.get('/login', userController.login);

router.get('/signup',userController.signup);


router.post('/create', userController.create); 


//use passport as a middleware to authenticate
router.post('/createsession', passport.authenticate(
    'local',
    {
        failureRedirect: '/users/login'
        
    },
), userController.creteSession);

 
router.get('/signout',userController.destroySession);


// router.get('/signout',userController.delete);



//this is important statement
module.exports=router;
