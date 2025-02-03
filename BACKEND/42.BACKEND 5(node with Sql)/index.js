
//mysql2 npm for build connection
const mysql = require('mysql2');
//faker npm generated random username,password etc
const { faker } = require('@faker-js/faker');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'Raushanabesec@123'
});

                         // simple query
        
// let q="query";  //q ko pass krenge connection.query me
                     
// try{
//   connection.query(q,(err,results)=>{
//     if(err) throw err;
//     console.log(results);
//     console.log(results.length);
//     console.log(results[0]);
//     console.log(results[1]);
//   });
// }catch(err){
//   console.log(err);
// }



                  // using placeholder


//insert new data

// "user" naam ka table create kr liye the schema.sql se


// let q="INSERT INTO user (id,username,email,password) VALUES(?,?,?,?)";
// let user=["123","NEWUSER","abc@gmail.com","abc"]
                     
// try{
//   connection.query(q,user, (err,results)=>{
//     if(err) throw err;
//     console.log(results);
    
//   });
// }catch(err){
//   console.log(err);
// }




// pass user in the form of array




// let q="INSERT INTO user (id,username,email,password) VALUES ?";
// let user=[
//   ["123","NEWUSER","abc@gmail.com","abc"],
//   ["124","NEWUSER2","abc2@gmail.com","abc2"]

// ];
                     
// try{
//   connection.query(q,[user], (err,results)=>{
//     if(err) throw err;
//     console.log(results);
    
//   });
// }catch(err){
//   console.log(err);
// }







// //to close connection
// connection.end();


// let getRandomUser= ()=> {
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.username(), 
//     password: faker.internet.password(),
    
//   };
// };









                                                     




                                        //  ----INSERT DATA IN BULK----
                                        //----(GENERATE DATA BY USING FAKER )----

 




          




                                    // for insert this data, simply type in this terminal as 
                                    // node index.js then go "my sql terminal" and check
                                    // type "show * from user;"

let getRandomUser= ()=> {
  return [
    faker.string.uuid(),
     faker.internet.username(), 
     faker.internet.email(),
     faker.internet.password(),
    
  ];
};

//inserting new data
let q="INSERT INTO user (id,username,email,password) VALUES ?";
let data=[];
for(let i=1;i<=100;i++){
  data.push(getRandomUser()); 
   //100fake user,on each iterator ,calling getrandomuser function
}
                     
try{
  connection.query(q,[data], (err,results)=>{
    if(err) throw err;
    console.log(results);
    
  });
}catch(err){
  console.log(err);
}

connection.end();
