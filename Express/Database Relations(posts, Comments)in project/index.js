const express= require('express');
const cookieParser= require('cookie-parser');
const port =8000;
const path= require('path');
const app= express();
app.use(express.urlencoded());
app.use(cookieParser());



const db = require('./config/mongoose')
//this is for layout, include the library and use that same library 
const expressLayout=require('express-ejs-layouts');
//used for session cookies
const session= require('express-session');
const passport=require('passport');
// const passportLocal= require('passport-local');
const passportLocal= require('./config/passport-local-strategy');

//for mongo-store, every time when we restart server, user identiity was lost, for this problem we have use
//MONGOSTORE, it wiill require parameter->session
const MongoStore=require('connect-mongo')(session);

//sass middlware for CSS styling
const sassMiddleware= require('node-sass-middleware');

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended', //files in multiple lines 
    prefix:'/css'  //where should my server looks for css files 
}));

//for including static files 
app.use(express.static('./assets'));

app.use(expressLayout);
//to use different static files(css,html.js) for every page 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);







//set up view engine
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));  
app.set('views','./views');



 
//use express-session 
//MongoStore is used to store session cookie in the db 
app.use(session({
    name:'codeail',
    //TODO change the secret before deployment in production mode
    //encrypted key     
    secret:'blahsomething',
    saveUninitialized:'false',
    resave:'false',
    cookie:{
         //milliseconds, max age of cookie specified here 
        maxAge:(1000 * 60 * 100)
    },
    store:new MongoStore(
        {
             mongooseConnection:db,
             autoRemove: 'disabled'

        },
        function(err){
            console.log(err || 'connect-mongoose setup OK')
        }
    
    )

}));

app.use(passport.initialize());
app.use(passport.session());

//check if session cookie is present or not 
app.use(passport.setAuthenticateduser);


//initially whenever we run localhost:8000
//the route wii be transfered to index.js file inside routes folder
app.use('/', require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Server will not run on this port:${err}`);//interpoletion

    }

    console.log(`server is running on port:${port}`);

})
