// console.log("Hello There!")

// let id=setInterval( ()=>{
//     console.log("Raushan");
// },2000)

// console.log(id)

// let id2=setInterval(() => {
//     console.log("secondInterval executed")
// }, 3000);

// console.log(id2)


// clearInterval(id);





            //  practice question



let id=setInterval( ()=>{
        console.log("Hello world!");
     },2000)

setTimeout( ()=>{

       clearInterval(id);
       console.log("clear interval ran");

},10000)

