// let btn=document.querySelector("button");
// console.dir(btn);

// // btn.onclick=function(){

// //     alert("button was clicked")
// //     // console.log("button was clicked")
// // }


// function sayhello(){
//     alert("hello");
// }
// btn.onclick=sayhello;



// let btns=document.querySelectorAll("buttons");
// for(btn of btns){
//       btn.onclick=sayhello;
//                                 //    not use sayhello()
//                                 //    name do execute mt kro abhi
//       btn.onmouseenter=function(){
//         console.log("you entered a mouse");
//       }
//  }
// function sayhello(){
//     alert("hello");
// }












                                                             // button click hone pe ->multiple function execute nii possible hai 
                                                            // means single value execute hoga.
                                                          



// let btns=document.querySelectorAll("buttons");
// for(btn of btns){
//       btn.onclick=sayhello;
//       btn.onclick=sayname; 
//  }
// function sayhello(){
//     alert("hello");
// }
// function sayname(){
//   alert("RAushan")
// }

                        //  yaha do func sayhello and sayname execute krna chah rhe hai 
                        //  but only one function execute krega





  //  for executing multiple function =========event listener introduced


  let btns=document.querySelectorAll("buttons");
  for(btn of btns){
       btn.addEventListener("click",sayhello); 
       btn.addEventListener("click",sayname);
       btn.addEventListener("dblclick",function(){
        conxole.log("you double click me")
       }); 
   }

  function sayhello(){
      alert("hello");
  }

  function sayname(){
    alert("RAushan")
  }

  