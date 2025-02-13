

const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => {
    console.log("Connection SuccessFull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

//defining schema for order
const orderSchema = new Schema({
   item:String,
   price:Number,
});



//define schema for customer
const customerSchema=new Schema({
  name:String,
  orders: [     
    {
           //order me id store kraayenge ki customer kya kya order kra hai (how to use go mongoos->populate then id )
           type:Schema.Types.ObjectId,
           ref:"Order"
    }
  ]
});


const Order =mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);


// const addCustomer=async()=>{
//     // let cust1=new Customer({
//     //     name:"rahul",
//     // });
                            
//     //                                                // yaha Order hai bt in db Orders se collection bna hai
//     // let order1=await Order.findOne({item:"chips"});                
//     // let order2=await Order.findOne({item:"samosa"});

//     // cust1.orders.push(order1);
//     // cust1.orders.push(order2);

//     // let result=await cust1.save();
//     // console.log(result);


    

//     let result=await Customer.find({});    //only  object id store hota h name nii
//     console.log(result);


// }

// addCustomer();



// #output----------> node customer.js
// Connection SuccessFull
// [
//   {
//     _id: new ObjectId('67ad6c5f1403349c660afeba'),
//     name: 'rahul',
//     orders: [
//       new ObjectId('67acf20bf6345bdec9024493'),
//       new ObjectId('67acec4c9c7588e2cf416321')
//     ],
//     __v: 0
//   }

                 






                                       //  ----populate method---sirf order ka object id show kr rha tha upr me bt ab order ka full details krega by using
                                    //    populate







const findCustomer=async()=>{
     let result=await Customer.find({}).populate("orders");       //prefer populate doc
    //  console.log(result);
     console.log(result[0]);    //result is array so print 0th index
};

findCustomer();

// #output------  [
//   {
//     _id: new ObjectId('67ad6c5f1403349c660afeba'),
//     name: 'rahul',
//     orders: [ [Object], [Object] ],
//     __v: 0
//   }
// ]




                
                                    
                                    












// const addOrders=async ()=>{ 
//     let res=await Order.insertMany( [
//         {item:"samosa",price:16},
//         {item:"Sweet",price:1600},
//         {item:"litti",price:146},
//         {item:"chips",price:185},

//         {item:"chocolate",price:1446},


// ]);
//     console.log(res);
// }

// addOrders();







