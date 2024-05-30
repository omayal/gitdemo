/*optional parameter
default parameter

mandatory paramter cannot be defined after a optional parameter
*/

function userRegistration(fname:string,lname:string,year:number,gender?:string,height?:number)
{
    console.log(`register with ${fname},${lname},${year},${gender},${height}`)
}
userRegistration('omayal','kattiressan',1998,'f')// we have not given height here so undefined will come
//will take in the order it is defined

//default parameter 
//playwright has default timeout as 30 sec//we can override it
function profile(fname:string,dob?:string,userpro:string='available')  //default value avaialble is set 
{
console.log(`profile details ${fname},${dob} ${userpro}`)
}
profile("lavanya","23/12/2024")  //default parameter is not needed to be mentioned in the calling function
profile("lavanya","away","23/12/2024")//but we can override