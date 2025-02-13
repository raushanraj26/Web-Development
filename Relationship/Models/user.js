// we are going to learn mongoose relastionship
// we are going to take example of user and adress in swiggy application
// means one user have multiple location save in app




// aproach 1

const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => {
    console.log("Connection SuccessFull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


//defining schema
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,                    //multiple address hai so same adress hona chaheye so false kr diye id assign nhi hoga onbly user ke liye hoga,address ke liye nhi
            location: String,
            city: String,

        },
    ],
});

//create table(User) with col or heading name like userschema 
const User = mongoose.model("User", userSchema);


//one user have multiple adress
const addUsers = async () => {
    let user1 = new User({
        username: "sherlockholmes",
        addresses: [
            {
                location: "221b Baker street",
                city: "London",
            },

        ],
});
  //this is 2nd address
  user1.addresses.push({ location: "p32 WallStreet", city: "London" });
  let result = await user1.save();
  console.log(result);

};
  

addUsers();   //call the function