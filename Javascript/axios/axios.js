
            //  random dog image api


// let btn=document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random"
 

// btn.addEventListener("click",async ()=>{
//     let link=await getimage();
//     let img=document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
//     });
    
//     async function getimage(){
//        try {
//         let res=await axios.get(url2);  //return a promise
//         return res.data.message;
//        } catch(e){
//         console.log("error-",e);
//         return "no image found"
//        }
//     }









    //  cat facts


// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//    let fact= await getfacts();
// //    console.log(fact);
//    let p=document.querySelector("#result");
//    p.innerText=fact;
// });


// let url="https://catfact.ninja/fact";
// async function getfacts(){
//    try {
//     let res=await axios.get(url);  //return a promise
//     return res.data.fact;
//    } catch(e){
//     console.log("error-",e);
//     return "no fact found"
//    }
// }





                                //   passing headrers in axios




const url="https://icanhazdadjoke.com/"
// async function getjokes(){
//     try{
//         let res=await axios.get(url);
//         console.log(res);      //write getjokes(); in console for output ,by default html format

//     }catch(err){
//         console.log(err);
//     }
// }


async function getjokes(){
    try{
        const config={headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
        console.log(res.data);      //write getjokes(); in console for output ,by default html format

    }catch(err){
        console.log(err);
    }
}
