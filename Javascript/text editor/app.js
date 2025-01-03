// jo input me type krnege sb console me dekhega
// means each type me tracknkrke console me print krna hai


let inp=document.querySelector("#text");
let p=document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
});