// add task wale button ko listen krna 
// jo v input me ho usee add task pe click krne pe add ho jaaye



let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

// btn.addEventListener("click", function(){
//     // console.log("clicked")   //btn clicked pe console ho
//      console.log(inp.value);  //btn click pe input me jo value hai ,console ho
//       inp.value="";           //just console ke bdd automatic input field reset ho jaaye taaki khud se dlt na krna pre 
//     })




btn.addEventListener("click",function(){

    let item=document.createElement("li");  //create li tag
    item.innerText=inp.value;    //assign to input value
    

    let delBtn=document.createElement("button");
    delBtn.innerText="delete"
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);    //add into ul
    inp.value="";              //reset input field after add 
});

     
             //   add function in delete function ,that is if delete then delete
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=delBtn.parentElement;     //jisko del krna hai uska parent find kro eg-li
//         // console.log(par);
//         par.remove();    //parent ko remove kr do menas li ko
//     });
// }

                    //  but jo new add honge uspe delete pe click krne se delte nii hoga
                    //  sirf jo poahle se hai wahi delte hoga




//  EvENT DELEGATION---jis child pe lgana hai uske parents pe lgaa dete hai
                    //   like button pe lgaana to hm uske parents li ya ul pe lgaayenge
//because and use--event bubbling





// ul.addEventListener("click",function(event){
//     console.log(event.target);
//     console.dir(event.target);   //bhut sara properties de dega
//     console.log(event.target.nodeName);
//     // console.log("button clicked");
// });

                    // concept----logic building
// ul.addEventListener("click",function(event){
//                             // item ya delete button ,dono pe click krne pe trigger ho rha hai so niche me 
//                             // me condition lgaa rhe   
//     if(event.target.nodeName=='BUTTON')
//     {
//         console.log("delete");
//     }else{
//         console.log("dont delete");
//     }
    
// });



ul.addEventListener("click",function(event){
    // item ya delete button ,dono pe click krne pe trigger ho rha hai so niche me 
    // me condition lgaa rhe   
if(event.target.nodeName=='BUTTON')
{
    let listItem=event.target.parentElement;  //jis list ko del krna uske pure parent means li ko hi delete krna hai
    // console.log(listItem); 
    listItem.remove();  //parent ko hi delete kro
    console.log("deleted");
}

});


