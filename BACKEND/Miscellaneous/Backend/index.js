const express=require("express");
const app=express();


//below are parse method=>given post data into json or readaable me change krga
                        //  express urlencoded data parse krega
app.use(express.urlencoded({extended:true}));
                           //express json data v parse krega post method me
app.use(express.json());


        //http://localhost:3000/register
app.get("/register",(req,res)=>{
     //query string se req aayega,,jo form me apply krenge
     let {user,password}=req.query;
   res.send(`Standar GET Response.Welcome ${user} and your password is ${password}`);
});

app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`Standard POST Response ${user}!`);
 });
 


let port=3000;
app.listen(port,()=>{
    console.log(`Listening to port &{port}`);
})