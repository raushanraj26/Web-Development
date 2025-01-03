let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    // console.log("generate random color")
    let h3=document.querySelector("h3");
    let rancolor=getRandomColor();   
    // value to rancolor me store kiye
    h3.innerText=rancolor
    //   h3 me assign kree hai rancolor ko
                           // console.log("colour updated")
    let div=document.querySelector("div");
    div.style.backgroundColor=rancolor;
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}
        //  for calling getrandom color,go to console and write getRandomColor()
        //  then console gives you a random color








let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("paragrap was clicked");
});
 let box=document.querySelector(".box");
 box.addEventListener("mouseenter",function(){
    console.log("mouse inside div");
 });