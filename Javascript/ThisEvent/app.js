let btn=document.querySelector("button");
let p=document.querySelector("p");'
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");


// btn.addEventListener("click",function(){
// //    console.log(this); 
// console.dir(this);
// console.dir(this.innerText);
// this.style.backgroundColor=blue;
// });

// p.addEventListener("click",function(){
//   console.dir(this.innerText);
//     this.style.backgroundColor=blue;
//     });

//  h1.addEventListener("click",function(){
//    console.dir(this.innerText);
//   this.style.backgroundColor=blue;
//   });

//   h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//    this.style.backgroundColor=blue;
//    });
              
    //  jis pe click krenge usme chnage ho 
    //  and this way is not good so ek function bnaa denge
    // redundancy v kam ho kjaayega


// this is best way to do
function changecolor(){
    console.dir(this.innerText);
this.style.backgroundColor="blue";
}

btn.addEventListener("click",changecolor);

p.addEventListener("click",changecolor);

h1.addEventListener("click",changecolor);

h3.addEventListener("click",changecolor);
 
 


    

