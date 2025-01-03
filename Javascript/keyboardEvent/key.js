// let btn=document.querySelector("button");
// // btn.addEventListener("click",function(event){
// //     console.log(event);
// //     conxole.log("button clicked");
// // });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });



// let input=document.querySelector("input");
// // input.addEventListener("keydown",function(){
// //     console.log("key was preessed");
// // })

// // input.addEventListener("keyup",function(){
// //     console.log("key was released");
// // })

// input.addEventListener("keyup",function(event){
//         console.log("all event is = ",event);
//         console.log("key is = ",event.key);
//         console.log("code is = ",event.code);
//         console.log("key is pressed");
//      })








                        //    video game





let input=document.querySelector("input");

input.addEventListener("keyup",function(event){
    console.log("code = ",event.code);  //arrowUp,arrowDown,arrowleft,arrowRight

if(event.code=="arrowUp") {
    console.log("Character move forward");
}else if(event.code=="arrowDown") {
    console.log("Character move backward");
}else if(event.code=="arrowLeft") {
    console.log("Character move Leftward");
}
else if(event.code=="arrowRight") {
    console.log("Character move Rightward");
}

});

//arrowUp(U),arrowDown(D),arrowleft(L),arrowRight(R) 
// in case of key then..
// if-else me KeyU,keyD,keyL,keyR se compare krnege 