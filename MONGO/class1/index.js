const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');  //this takes time to connect the mpngo db so
                                                         //   we handle it by ansynchronously using given below syntax








    //now dealing ansynchrounously to connect mongodb
 main()
 .then((res)=>{
    console.log(res);
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


//define schema
const userSchema= new mongoose.Schema({
   name:String,
   email:String,
   age:Number,
  });


  //define model(create collection)---->type on shell => show collections,show dbs


  const user=mongoose.model("user",userSchema);

//   const employee=mongoose.model("employee",userSchema);



                                               //inser one data

//   const user1= new user({name:"raushan",email:"raus@.com",age:22});

//   user1.save();  //to save in db





//   const user2= new user({name:"Raushan Raj",email:"raush@.com",age:22});
                               
// //   save return promise so error handling use kre hai
//   user2.save()
//   .then((res)=>{
//    console.log(res);
//   })
//   .catch((err)=>{
//    console.log(err);
//   });


//   data test database me save hua ya ni uske liye ye type kro... test> db.users.find()





                                   //insert many---> db.users.find() check data in db
// user.insertMany(
//    [
//       {name:"raushan",email:"abs.com",age:20},
//       {name:"Raj",email:"abcs.com",age:20},
//       {name:"raushan raj",email:"abss.com",age:20},
//    ]
// ).then((data)=>{
//    console.log(data);
// });







            // ---find---(for results->type node index.js in terminal)




// user.find().then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// });


            //find by condition age greaer than 20
// user.find({age:{$gt:20}}).then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// });



// user.find({age:{$gt:20}}).then((res)=>{
//    console.log(res[0].name);                     //0th index ka only name print kro
// })
// .catch((err)=>{
//    console.log(err);
// });













                     //  --update----




// user.updateOne({name:"raushan"},{age:95})
// .then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// });



               //whose age is greater and equal to 55,make it 95
// user.updateMany({age:{$gte:55}},{age:95})
// .then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// });


//       //for look in db type on shell->   test> db.users.find() here test is db and users is collection















                              // --delete--










//           //look dlt hua ya nii---db.users.find() on shell
// user.deleteOne({name:"raushan"})
// .then((res)=>{
//    console.log(res);
// });



          //dlt all documents whose age is greater than 20 
         user.deleteMany({age:{$gt:20}})
         .then((res)=>{
            console.log(res);
         });