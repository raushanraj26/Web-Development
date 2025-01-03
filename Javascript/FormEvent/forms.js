// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();  //durse page pe jaane se bachayega
//     console.log("form submitted");   //submit ek event hai
//     // alert("form subitted");
// });





                            // Extracting form Data-->submitted form se data kaise extract kre



// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value); 
//     alert(`hi ${user.value}, your password is set to ${pass.value}`);

//     // let inp=document.querySelector("input");
//     // // console.log(inp);
//     // console.dir(inp);
//     // // console.dir(inp.innerText); input me inner text ,e store nii hota,value me store hota hai
//     // console.dir(inp.value);

// });










                            //  change event




// let form=document.querySelector("form");
//     form.addEventListener("submit",function(event){
//          event.preventDefault();
//     });

// let user=document.querySelector(#user);
// user.addEventListener("change",function(){
//     console.log("input changed");
//     console,log("final value=", this.value);
// });












                              // input event

 
                              

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
});

let user=document.querySelector(#user);

user.addEventListener("change",function(){
console.log("change event");
console,log("final value=", this.value);
});

user.addEventListener("input",function(){
    console.log("input event");
    console,log("final value=", this.value);
    });

