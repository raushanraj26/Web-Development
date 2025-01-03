const express=require("express");
const app=express();
const path=require("path");
//for creating unique id
const { v4: uuidv4 } = require('uuid');
//method override package
const methodOverride = require('method-override')


app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));



//creating predefined quora posts in array
let posts=[
    {
        id:uuidv4(),
        username:"RAusha raj",
        content:"I Lve Coding"
    },
    {
        id:uuidv4(),
        username:"Vivek",
        content:"I have completed my internship"
    },
    {
        id:uuidv4(),
        username:"kunda",
        content:"I love Blogging"
    }
]


app.get("/posts",(req,res)=>{
    //render index.ejs file,post data ko index.js me bhj rhe wahi display hoga
    res.render("index.ejs",{posts})
});

//create route (add new post)=>this works in 2 routes
                            //    1.serve the form (get method)
                            //    2.add new post (post method)
app.get("/posts/new",(req,res)=>{
    //data kuch ni hai pass krne ko,isme user apna post ka content likhega
    res.render("new.ejs")
});
app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {  username,content}=req.body;
    let id =uuidv4();
    posts.push({id,username,content});

    // res.send("post successfull");
    res.redirect("/posts");
});

//id se post ko retrieve krnege
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render("show.ejs",{post})
    
});

//to edit or update specific posts=>2 ways, one is serve edit form
app.patch("/posts/:id",(req,res)=>{
   let {id}=req.params;
   let newcontent=req.body.content;
   //match krega req id wale se
   let post=posts.find((p)=>id==p.id);
   post.content=newcontent;
   console.log(post);
//    res.send("path req success")
res.redirect("/posts");

});

// for serving form for edit
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render("editform.ejs",{post});

});


//destroy route
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    //filter kree,id ko chhor kr sbko rhne do postr me isiliye not equal lgaa hai 
    posts=posts.filter((p)=>id !==p.id);
    res.redirect("/posts");
})  



app.listen(8080);