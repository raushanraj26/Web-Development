// let arr=[1,4,5,8,6,9]

// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max)


// find max by reduce

                    //  here by default initial value of max=0
// let maxi=arr.reduce( (max,el)=>{
//     if(max > el){
//         return max;
//     } else
//     {
//         return el;
//     }
    
// } );
// console.log(maxi)





                            //   practice-> create a function to find the minimum number in an array.
    



function getmini(nums)
{
    let mini=nums.reduce ((min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
  } ) ;
  return mini;
}
  
  let nums=[9,10,5,2,3,4,1]
  let ans=getmini(nums);
  console.log(ans)


