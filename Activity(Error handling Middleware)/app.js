
// we are going to perform some activity like 
// create an admin route and send an error with a 403 status code



const express= require("express");
const app=express();
const expressError=require("./expressError");           //require expressError file


app.get("/admin",(req,res)=>{
    throw new expressError(403,"Access to admin is forbidden!");

})

app.use((err,req,res,next)=>{
    let { status=500,message="some error occured"}=err;
    res.status(status).message(message);
});




app.listen(9000,()=>{
    console.log("server is listing on port 9000");
})