
//also we see the handlisng async error



const express=require("express");
const app=express();
const path=require("path");
const mongoose = require('mongoose');
const chat=require("./models/chat.js");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError");           //require express errror file for error handling 

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//static page like cs,jss ko server krne k liye path likho
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));



main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
}

// define document or row
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



//indexd route

// //http://localhost:8080/chats
// app.get("/chats",async (req,res)=>{
//     let chats=await chat.find();  //saari chats ko client ko bhna hai so template se share krenge
//     console.log(chats);
//     res.render("index.ejs" ,{chats}); 
// });

// //route for new chat=>as template ek from render krna hai
// app.get("/chats/new" ,(req,res)=>{
//     res.render("new.ejs");

// })

// //create route (new chat will created then saved into db)
// app.post("/chats",(req,res)=>{
//     let {from,to,msg}=req.body;   //isko parse ke liye app.use(express.urlencoded{extended:true});
//     //obj create kro chat ka
//     let newChat=new chat({
//         from:from,
//         to:to,
//         msg:msg,
//         created_at:new Date(),
//     });
     
//     //cretae krne ke bdd save kro db me
//     newChat.save().then((res)=>{
//     console.log("chat was saved in db");
//     }).catch(err=>{
//     console.log(err)
//      });
//     //after saving data INTO DB
//     res.redirect("/chats");
// });



// //edit route => msg edit
// app.get("/chats/:id/edit",async(req,res)=>{
//     let {id}=req.params;
//     let chat=await chat.findById(id);
//     res.render("edit.ejs",{chat});
// })

// //update route=>edit button  se edit ke liye aayega edit krne ko
// app.put("/chats/:id",async (req,res)=>{
//     let { id }=req.params;
//     let { msg:newMsg } = req.body;
//     let updatechat=await chat.findByIdAndUpdate(id,{msg:newMsg},{renValidators:true,new:true});  //findbyidandupdate returnsd promise so we did async await
//     // console.log(updatechat);
//     res.redirect("/chats");
// });



// //destroy route
// app.delete("/chats/:id",async (req,res)=>{
//     let {id}=req.params;
//     let deleteChat=await chat.findByIdAndDelete(id);
//     console.log(deletedChat);
//     res.redirect("/chats");
// })



// app.get("/",(req,res)=>{
//     res.send("working");
// });




                                    














                                                                 //error handling example








//http://localhost:8080/chats
app.get("/chats",async (req,res)=>{
    let chats=await chat.find();  //saari chats ko client ko bhna hai so template se share krenge
    console.log(chats);
    res.render("index.ejs" ,{chats}); 
});

//this is not async 
                                // http://localhost:8080/chats/new?=>    route is wrong so it thros error
app.get("/chats/new" ,(req,res)=>{
    throw new ExpressError(404,"Handling async error");
     res.render("new.ejs");
})

//create route (new chat will created then saved into db)
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;   //isko parse ke liye app.use(express.urlencoded{extended:true});
    //obj create kro chat ka
    let newChat=new chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
     
    //cretae krne ke bdd save kro db me
    newChat.save().then((res)=>{
    console.log("chat was saved in db");
    }).catch(err=>{
    console.log(err)
     });
    //after saving data INTO DB
    res.redirect("/chats");
});



//edit route => msg edit
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat=await chat.findById(id);
    res.render("edit.ejs",{chat});
})

//update route=>edit button  se edit ke liye aayega edit krne ko
app.put("/chats/:id",async (req,res)=>{
    let { id }=req.params;
    let { msg:newMsg } = req.body;
    let updatechat=await chat.findByIdAndUpdate(id,{msg:newMsg},{renValidators:true,new:true});  //findbyidandupdate returnsd promise so we did async await
    // console.log(updatechat);
    res.redirect("/chats");
});



//destroy route   ------------------------------------example of try and catch error handling
app.delete("/chats/:id",async (req,res)=>{
    try{
        let {id}=req.params;
    let deleteChat=await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
    }
    catch(Err){
        next(err);
    }
})



app.get("/",(req,res)=>{
    res.send("working");
});




// new-show route (example for error handfling)
app.get("/chats/:id",async (req,res,next)=>{
    let {id}=req.params;
    let chat=await chat.findById(id);
    if(!chat){
        next( new ExpressError(404,"page not found"));   //aSYNC ME ERROR HANDLE KRNE K LIYE NEXT K UNDER PASS KRTE H
    }

                                  
    res.render("edit.ejs",{chat});          //ID me glt kuch type kro then visible hoga
});

//error handling middlerware
app.use((err,req,res,next)=>{
    let {status=500,message="error occured"}=err;
    res.status(status).send(message);
});





app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});