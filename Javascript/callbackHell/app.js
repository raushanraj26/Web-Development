h1=document.querySelector("h1");

// setTimeout(()=>{
//    h1.style.color="red"; 
// },1000);

// setTimeout(()=>{
//     h1.style.color="blue"; 
//  },2000);

//  setTimeout(()=>{
//     h1.style.color="orange"; 
//  },3000);

//  setTimeout(()=>{
//     h1.style.color="pink"; 
//  },4000);



           //2nd way
// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;

//     },delay);
// }

// changeColor("red",1000);
// changeColor("blue",2000);
// changeColor("pink",3000);
// changeColor("green",4000);



function changeColor(color,delay){
    setTimeout(()=>{
        h1.style.color=color;

    },delay);
}

changeColor("red",1000);
changeColor("blue",2000);
changeColor("pink",3000);
changeColor("green",4000);