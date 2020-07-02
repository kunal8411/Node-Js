const express = require('express');


const router = express.Router();


var userController = require('../controllers/users_contoller');

//when we hit "localhost:8000/users/profile" in url this code will run 
router.get('/profile',userController.profile);





//this is important statement
module.exports=router;
