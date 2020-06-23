const express= require('express');
const port =8000;

const app=express();

app.get('/',function(req,res){
    res.send("<h2>hello i am here, successfully</h2>")
});



app.listen(port,function(err){
    if(err){
        console.log("Hey yuo are misguided, please go back and try again")
    }
    console.log("hello Welcome to my Server ",port);

})
