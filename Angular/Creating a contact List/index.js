const express= require('express');
const path= require('path');
const port=8000;

// var ejs=require('ejs')

var contactList=[
    {
        name:"kunal",
        phoneNo:"1111111111111"
    },
    {
        name:"Piyush",
        phoneNo:"22222222222222"
    },
    {
        name:"Debashis",
        phoneNo:"33333333333333"
    }
]
const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    
    return res.render('home',{
        title:"Kunal Here",
        contact_list:contactList
    });
    
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
