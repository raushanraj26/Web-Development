// 3rd approach--->one user have millions/lakh post
//cd models (first directory change then node post.js)
//some mongoshell command
// db.users.find(),db.users.deleteMany({})
// db.posts.find(), db.posts.deleteMany({})




const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => {
    console.log("Connection SuccessFull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

//defining schema for usert
const userSchema = new Schema({
   username:String,
   email:String,

});


//defining schema for post
const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
          //whose post is this ,we using populate that also name will mentioned (how to use go mongoos->populate then id )
          type:Schema.Types.ObjectId,
          ref:"User"
    }
 });
 
 //create mode
 const User=mongoose.model("User",userSchema);
 const post=mongoose.model("post",postSchema);





//    -----------------------------------------------------------------




//  //func for adding data
//  const addData= async ()=>{
//     //user
//     let user1=new User({
//         username:"Raushan Raj",
//         email:"abc@gmail.com",
//     });
//     //post
//     let post1=new post({
//         content:"Hello World!",
//         likes:5,
//     });
   
//     //post1 me user key me user1 ka data fill kr rhe hai
//     post1.user=user1;
    

//     await user1.save();
//     await post1.save();
   
//  };






                                     // //now this time only post will be add

// const addData= async ()=>{
//     //user extract krenge tb uska post me add krnege
//     let user1=await User.findOne({username:"Raushan Raj"});
    
//     // 2nd post
//     let post2=new post({
//         content:"BYe bYe!",
//         likes:89,
//     });
   
//     //post1 me user key me user1 ka data fill kr rhe hai
//     post2.user=user1;
    

   
//     await post2.save();
   
//  };


//  addData();    //for confirmation ,type on mongo shell  db.posts.find(), db.users.find()












// get data




const getData=async ()=>{
    let result =await post.findOne({}).populate("user","username");    //show  user's username onluy
    console.log(result);
}

getData();
