// example of request parameters


// const express=require("express");
// const app=express();

// app.get("/",(req,res)=>{
//     res.send("hello,i am root");
//    });


//                                       //http://localhost:3000/raushan/123
// // app.get("/:username/:password",(req,res)=>{
// //  console.log(req.params);
// //  res.send("hello,i am root");
// // });




// // app.get("/:username/:password",(req,res)=>{
// //     let {username,password}=req.params;
// //     res.send(`Welcome to the page of @${username} ans password is ${password}.`)
// //    });

         





//                            // send html code in response





//  app.get("/:username/:password",(req,res)=>{
//     let {username,password}=req.params;
//     let htmlString= `<h1> Welcome to the page of @${username} ans password is ${password}.</h1>` 
//     res.send(htmlString);
//    });
   


// app.listen(3000);










                                         // ----QUERY STRINGS----

const express=require("express");
const app=express();

                //   http://localhost:3000/search?q=apple & colour=red
app.get("/search",(req,res)=>{
    //   console.log(req.query);
    //   res.send("showing query string");
    let {q}=req.query;
    res.send(`search results for query: ${q}`);
});

app.listen(3000);