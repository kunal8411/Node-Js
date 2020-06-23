const express= require('express');
const port =8000;

const app=express();


//get method is used to get infor from DB 
app.get('/',function(req,res){
    res.send("<h2>hello i am here, successfully</h2>") //same like res.end() , in angular we use res.send().
});



app.listen(port,function(err){
    if(err){
        console.log("Hey yuo are misguided, please go back and try again")
    }
    console.log("hello Welcome to my Server ",port);

})
