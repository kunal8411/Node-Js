/Codeal/index.js


const express= require('express');
const port =8000;
const path= require('path');
const app= express();


//this is for layout, include the library and use that same library,
//always put this library above the routes
const expressLayout=require('express-ejs-layouts');
app.use(expressLayout);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//initially whenever we run localhost:8000
//the route wii be transfered to index.js file inside routes folder
app.use('/', require('./routes/index'));





app.listen(port,function(err){
    if(err){
        console.log(`Server will not run on this port:${err}`);

    }

    console.log(`server is running on port:${port}`);

})
