const mongoose= require('mongoose');

const postSchema=new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user:{
        //reference to objectId type
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //inclued the array of id's of all comments in post schema itself
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{
    timestamps: true
});



const Post= mongoose.model('Post',postSchema);
module.exports=Post;
