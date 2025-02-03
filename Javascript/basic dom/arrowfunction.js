const sum=(a,b)=>{
    console.log(a+b);
};

sum(2,3);

const cube=(n)=>{
    console.log(n*n*n);

};
cube(2);



const pow=(a,b)=>{
    console.log(a**b);

};
pow(2,3);


const hello=()=>{
    console.log("hello mr Raushan Raj");
}
hello();



                        //   when i have to return only value then we compressed the arrow function compressed
                        //   yaha sirff value return hoga and computer khud smjh jaayega ki value return krna tha implicitallky
                        //   syntax me change hai,retrurn keyword likhne ki jrurt nnii hai
    



const mul=(a,b)=>(a*b)

let a=mul(2,3);
console.log(`implicitally return arrow function: ${a}`)



