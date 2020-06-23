const express= require('express');
const path= require('path');      //inbuild module
const port=8000;




const app= express();        //creating server using express........app will have many properties as a a key and value 
app.set('view engine','ejs'); //setting view engine property in app object
app.set('views',path.join(__dirname,'views'));     //__dirname gives us the correct path where our .js file is running and this set property
                                                     // will search views folder in that path, in views folder we have written our html file
                                                     // but with .ejs extansion 
                                                        

app.get('/',function(req,res){
    
    return res.render('home');  //whenevwe w render info from hrml file use render function and always return this one. 
});


app.listen(port,function(err){
    if(err){
        console.log('error found',err);

    }

    console.log("Hello your server is running on port",port)
})
