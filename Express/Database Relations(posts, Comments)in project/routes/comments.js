const express=require('express');

const router= express.Router();

const passport= require('passport');

var commentsController= require('../controllers/comments_controller');




router.post('/create', passport.checkAuthentication, commentsController.create);


module.exports=router;
