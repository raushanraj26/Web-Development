const express=require("express");
const app=express();

 //initialise ejs
app.set("view engine","ejs");


//for serving Static file
// app.use(express.static("public"))
                                     //do directive use kr rhe hai
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
    
    //    data.json me jsika abhi data hai wahi data dega like cat,dog
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
   const instaData=require("./data.json");
   const data=instaData[username];
//    console.log(data);
if(data){
                                                //    if http://localhost:3000/ig/cats
    res.render("instagram.ejs",{data});
}
else{
                                //   http://localhost:3000/ig/Raushan
    //jb data ni hoga means error then error page show krtnge
    res.render("error.ejs");
}
   
});


app.listen(3000);



// //jb dusre directive se view folder ko access krna ho toh 
// app.set("views",Path.join(__dirname,"/views"));