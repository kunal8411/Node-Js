const express= require('express');
const path= require('path');
const port=8000;




const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    
    return res.render('home',{title:"Kunal Here"});
});

app.get('/profile', function(req,res){
    return res.render('practice',{body:"hello body"});
});


app.listen(port,function(err){
    if(err){
        console.log('error found',err);

    }

    console.log("Hello your server is running on port",port)
});
