

// in this,we are creating routing apis,take input from user and 
// do operation like delte user,update user,show username 



//mysql2 npm for build connection
const mysql = require('mysql2');
//faker npm generated random username,password etc
const { faker } = require('@faker-js/faker');

const express=require("express")
const app=express();
const methodOverride=require("method-override");

const path=require("path");
                            

 
                            
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));   //data ko parse krne ke liye
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));   





// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'Raushanabesec@123'
});

let getRandomUser= ()=> {
    return [
      faker.string.uuid(),
       faker.internet.username(), 
       faker.internet.email(),
       faker.internet.password(),
      
    ];
  };
  
//home route(show total no of users)     http://localhost:8080/
    //q(query) pass kiye  db ke connection me then wo results ke form ke response dega
    // res and res->express ka 
    // err and results->database ka hai
 app.get("/",(req,res)=>{
 let q=`SELECT count(*) FROM user`;
try{
    connection.query(q, (err,results)=>{
      if(err) throw err;
      // console.log(results);
      // res.send(results);
                                    //count(*) is a key and we have print its value so results[0]["count(*)"
      let count = results[0]["count(*)"]
      res.render("home.ejs",{count});
      
    });
  }catch(err){
    console.log(err);
    res.send("some error in db");
  }
 });


 //show route (email,id)     http://localhost:8080/user
 app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;
 try{
     connection.query(q, (err,results)=>{
       if(err) throw err;
      //  console.log(results);
      //  res.send(results);
       res.render("showuser.ejs",{results});
       
     });
   }catch(err){
     console.log(err);
     res.send("some error in db");
   }
  });

  //edit route (edit w2ale button pe click krenge then id fetch krega)
  app.get("/user/:id/edit",(req,res)=>{
          //isme user id ni dega,data me hi edit krke button hoga wahi automatic fetch krega

    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
     connection.query(q, (err,result)=>{
       if(err) throw err;
                                    //array form me aa rha so 0th index wala print krenge
      //  console.log(result);
      let user = result[0];    //ab array me show ni hoga
       res.render("edit.ejs",{user});
       
     });
   }catch(err){
     console.log(err);
     res.send("some error in db");
   }
  });                   
  
//UPDATE ROUTE(UPDAT IN DB)
app.patch("/user/:id",(Req,res)=>{
  let {id}=req.params;
  let{ password:formpass,username:newusername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
 
  try{
    connection.query(q, (err,result)=>{
      if(err) throw err;
     let user = result[0];    //ab array me show ni hoga
     if(formpass!=user.password){   //password match pe update ho skta
      res.send("wrong paassword");
     } else{
      let q2=`UPDATE user SET username='${newusername}' WHERE id='${id}'`;
      connection.query(q2, (err,result)=>{
        if(err) throw err;
        res.redirect("/user");
      });
     }
    });
  } catch(err){
    console.log(err);
    res.send("some error in db");
  }


});

                //user ke password ke liye type sql terminal
                // select * from user where email='Meta42@gmail.com';
                // then original password lejke fill kree then update hoga


  app.listen("8080",()=>{
    console.log("server iss listening");

  });



  
  