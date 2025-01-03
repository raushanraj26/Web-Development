let div=document.querySelector("div")
let ul=document.querySelector("ul")
let lis=document.querySelector("li")

                                //   without stopPropagation method=kisi child me clcik krpge to
                                // parent ka v console run krega,
                                // isiko rokne ke liye stoppropagation use krte hai
// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(){
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click",function(){
//         console.log("li was clicked");
//     });

// }





div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });

}