const express=require("express");
const app= express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // res.send("this is home");
    res.render("home.ejs");
});
            //   by default, express render share krte tym view folder search krega then home.ejs search krega


//search routing  http://localhost:8080/search
 app.get("/search",(req,res)=>{
    
     res.send("hello");
 })


 //roldice routing     http://localhost:8080/rolldice

 app.get("/rolldice",(req,res)=>{
    // res.render("rolldice.ejs");
                        //   kisi db se aa rha so yaha store kre
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ num:diceval});
                                                    // render me 2 param pass kre 2nd object pass hua
});



//ig search routing         http://localhost:8080/ig/RaushanRaj
app.get("/ig/:username",(req,res)=>{
  const followers=["ROHIT","VIVEK","RIYA","NEHA"]
  let {username}=req.params;
  res.render("instagram.ejs",{username});
});



                                         
app.listen(8080);






// jb dusre directory me jaakr run krnge to view folder ka path change ho jaane se response render nii ho paayega 
// for this we require and write these two codes

// const path=require("path");
// app.set("views",path.join(__dirname,"/views"));