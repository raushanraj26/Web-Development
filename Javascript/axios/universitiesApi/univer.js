let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);


    let cllgArr=await getcolleges(country);
    show(cllgArr);
});

function show(cllgArr){
    let list=document.querySelector("#list");
    list.innertext="";
    for(col of cllgArr){
        console.log(col.name);


                        // cllgarr object me bhut sara cllg name HTMLDetailsElement,
                        // so for each ,cllgname ko list me append krna so loop ke under ye cretae krke add kre hai

                        
        let li=document.createElement("li");   //create li
        li.innerText=col.name;                 //assign text in li
        list.appendChild(li);   //append li into list

    }
}

async function getcolleges(country){
  try{
    let res=await axios.get(url+country);
    return res.data;

  }catch(e){
    console.log("error :",e);
    return [];
  }
}