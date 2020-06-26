/Contact_List




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
app.set('views',path.join(__dirname,'views'));    //find views folder in /Contact_list folder
app.use(express.urlencoded());   // to take data from form which is written in home.ejs

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


app.post('/create-contact',function(req,res){       //craate contact List 
   contactList.push({
       name:req.body.name,
       phoneNo:req.body.phoneno
   });
   res.redirect('/');   //after adding contact redirect to home page 

});


//to delete a contact 
app.get('/delete-contact',function(req,res){
    console.log(req.query);       //req.query contains whatever we have specified in query  params in href in .ejs file inside form tag 
    let phone=req.query.phone;    // take phone no, 


//search phoneNo in our array and  slice function is used to delete the entrry from array 
    let contactIndex= contactList.findIndex(contact => contact.phoneNo==phone);  //here i have used arrow function, if phone no not found return -1
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);

    }
     res.redirect('/');    //after deleting return to home page
    

})

app.listen(port,function(err){
    if(err){
        console.log('error found',err);

    }

    console.log("Hello your server is running on port",port)
});

