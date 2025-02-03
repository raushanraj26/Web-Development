// chat(model) will have IdleDeadline,from,to,message,createdat.
// and we can do update chat or delete chat etc



const mongoose = require('mongoose');

//define schema(column)
const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        maxlength:50,

    },
    created_at:{
        type:Date,
        required:true,
    }

});



// define model(collection or table)
const chat=mongoose.model("chat",chatSchema);

module.exports=chat;

