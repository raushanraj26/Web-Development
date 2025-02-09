// for initialise the  => npm init


const express= require("express");
const app=express();
const expressError=require("./expressError");           //require expressError file

  


//middleware


// app.use((req,res)=>{
//     let { query }=req.query;  //http://localhost:8000/?query=abcd
//     console.log(query);
//     console.log("Hi I am Middleware");
//     res.send("middleware finished");
// });


// using next() middleware

app.use((req,res,next)=>{
    console.log("Hi I am first Middleware");
    next();
    // console.log("this is after next");     it is execute bt dont write it
    // return next();
    // // console.log("this is after next");         it will not execute
});

//logger->(same as morgan package)
// app.use((req,res,next)=>{
//     req.time=Date.now();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });


// //middleware  authencation to use data
// // http://localhost:8000/api?token=giveaccess
// app.use("/api",(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     res.send("denied access");
// });


// //api route
// app.get("/api",(req,res)=>{
//     res.send("data");
// })



//middleware can be written as -


// // http://localhost:8000/api?token=giveaccess
// const checkToken=(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     res.send("denied access");
// };


// //api route
// app.get("/api",checkToken,(req,res)=>{
//     res.send("data");
// });





//use expresserror class

// http://localhost:8000/api?token=giveaccess
const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
          //throw new Error ("denied access");
        throw new expressErrorError (401,"denied access");    //status and msg pas kre hai
};


//api route
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});






app.use((req,res,next)=>{
    console.log("Hi I am  second Middleware");
    next();
});

app.get("/",(req,res)=>{
    res.send("I am root.");
});

app.get("/random",(req,res)=>{
    res.send("I am random page.");
});



                            //error handling

app.get("/err",(req,res)=>{
    abcd=abcud;
})
// error handling midleware
app.use((err,req,res,next)=>{
    console.log("-----Error-----");
    // next(err);   //instead of calling next,we send error 
    res.send(err);    //client side pe show krega
});

// app.use((err,req,res,next)=>{
//     console.log("-----Error2 middleware-----");
//     next(err);
// });

// app.use((req,res)=>{
//     res.status(404).send("page not found");
// }); 




//404- if not found any route before then excute this
app.use((Request,res)=>{
    res.statusMessage(404).send("page not found");
});



app.listen(8000,()=>{
    console.log("Server is listing to port 8000");
});





