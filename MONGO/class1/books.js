// amazon is database and have many collections like books,electronics ,phones beauty etc
// books is a collection which contains individual book information
//for executing books.js file type->node books.js

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
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');  //amazon represents database name
}

//define schema for books->this is advance way to define .and we already see in index.js filee
// const bookSchema=new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     author:{
//         type:String,
//     },
//     price:{
//         type:Number,
//     },
// });




                    //   ----schematype options like required,default,select validate,immutable etc


const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        // min:1
        min:[1,"price is too low for amazon selling!!"],
    },
    discout:{ 
        type:Number,
        default:0           //deafult discount sb me add hoga
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],    //category inhi me se hona cahyeye
    },
    genre:[String]
});










//update









//creating model(collection or table)
const book=mongoose.model("book",bookSchema);



                                // for verify=> go to shell
                                // 1.show dbs
                                // 2.use amazon
                                // 3.show collections  then it will show books collection



//insert documents

// let book1=new book({
//     title:"maths",
//     author:"RDSHARMA",
//     price:1200
// });

// book1.save().then((res)=>{
//   console.log(res);
// }).catch(err=>{
//     console.log(err);
// });

                        
                                      //verify in db=> db.books.find()










// let book2=new book({
//     title:"maths",
//     // author:"RDSHARMA",     skip kr skte becoz author is not required only name is required
//     price:1200
// });

// book2.save().then((res)=>{
//   console.log(res);
// }).catch(err=>{
//     console.log(err);
// });




// let book2=new book({
//     title:"How to kill mock vie",
//     author:"unknown man",     
//     price:"1200"                     //string ke form me pass hai fir v acceptable hai
// });

// book2.save().then((res)=>{
//   console.log(res);
// }).catch(err=>{
//     console.log(err);
// });








                     //   --schema type option like required,default etc

// let book2=new book({
//     title:"schematype default discount",
//     author:"default type example",     
//     price:"200"                   
// });

// book2.save().then((res)=>{
//   console.log(res);
// }).catch(err=>{
//     console.log(err);
// });




let book2=new book({
    title:"marvel comics",
    author:"charlie",     
    price:"2002",
    category:"non_fiction",
    genre:["comics","superheros","fiction"]                   
});

book2.save().then((res)=>{
  console.log(res);
}).catch(err=>{
    console.log(err);
});










