/*
Tye annotation -you annotate a varibale with a type 
-excplicity mentioning the type 


*/

let userprofile :number | string //(union type)  one of the several different types mentioned here
userprofile ="satish"

console.log(userprofile)

//type alias 
type numorstring =number|string
let userprofile2 :numorstring
userprofile=1;

type supportedbrowser ="chrome"|"firefox"
function invokebrowser(brwosername:supportedbrowser)
{
if(brwosername==="chrome")
    {
        console.log("launch chrome browser")
    }
    else{
        console.log("launch firefox")
    }
}

//invokebrowser("safari")  ==>other than chrome or firefox will not be supported 
//we can have values to variables 
invokebrowser("chrome")


//combine mutiple values together -intersection types
type admin={
previledge:string
}
type employee={
    name:string,
    empid:number,
    date:string
}
type qa =admin & employee

const usersss: qa = {
name:"santhanapriya",
previledge:"server",
empid:9,
date:"12/3/2024"
}
