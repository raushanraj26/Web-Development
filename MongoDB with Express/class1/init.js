
      //initialise database
//node init.js


const mongoose = require('mongoose');
const chat=require("./models/chat.js");



      main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
}

//define document or row
let chat1=new chat({
    from:"neha",
    to:"priya",
    msg:"send ur exam datesheet",
    created_at:new Date(),
});


//define document or row
// let chat1=new chat({
//     from:"neha",
//     to:"priya",
//     msg:"send ur exam datesheet",
//     created_at:new Date(),
// });

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err)
// });



//many me data array ke form me insetr krate hai
 let allchats=[
    {
    from:"neha",
    to:"priya",
    msg:"send ur exam datesheet",
    created_at:new Date(),
    },

    {
        from:"rausha",
        to:"rahul",
        msg:"send ur exam marks",
        created_at:new Date(),
    },
    {
        from:"rohit",
        to:"raushan",
        msg:"give me ur laptop",
        created_at:new Date(),
    },

    {
        from:"shyam",
        to:"shyam",
        msg:"hello",
        created_at:new Date(),
    },

    {
        from:"a",
        to:"b",
        msg:"hey",
        created_at:new Date(),
    },
];

chat.insertMany(allchats);
 
                                //node init.js ko execute kro