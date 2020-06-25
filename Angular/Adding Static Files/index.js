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
app.set('views',path.join(__dirname,'views')); //search for .ejs files inside views folder, __dirname is used for search directory name  
app.use(express.urlencoded());

// this will search assests folder in root folder where we have write this .js file.  
//and assets will have different folders inside it 
app.use(express.static('assets'));

app.get('/',function(req,res){
    
    return res.render('home',{
        title:"Kunal Here",
        contact_list:contactList
    });
    
});

app.get('/profile', function(req,res){
    return res.render('practice',{body:"hello body"});
});


app.post('/create-contact',function(req,res){
   contactList.push({
       name:req.body.name,
       phoneNo:req.body.phoneno
   });
   res.redirect('/');

})

app.listen(port,function(err){
    if(err){
        console.log('error found',err);

    }

    console.log("Hello your server is running on port",port)
});

