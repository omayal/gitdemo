// let username=`ramya`
// console.log(typeof(username))
// let user=new String("divya")
// console.log(typeof(user))

// //when we use quote with in quote
// let testype='Meena it\'s girl'  //'s is there || if '\'then it will be ignored and 's is cosidered as it is
// console.log(testype)
// let doublequote ="This is double quote \"\" "

// // concatination
// let test=100
// let testcase="new testcase"
// let result =test+ "-" + testcase

// //template literal
// //instead of concatination
// let testcasecount=100
// let output=`there are ${testcasecount} in our project`
// console.log(output)

// let coursename="playwright"
// console.log(`the length of the coursename is ${coursename.length}`) //with normal concatination this finding the lenght is not possisble
// console.log(`charated at the 5th index ${coursename.charAt(5)}`)    

// //get the second from last characted
// let len=coursename.length
// console.log(`charated at the 5th index ${coursename.charAt(len-2)}`)//coz length starts from 1 and char at inde started from 0

// //index of
// console.log(`index of w ${coursename.indexOf("w")}`)
// //if the character is not there - "-1 is the output"

// //included
// console.log(`includes ${coursename.includes("wri")}`)

// //to uppercase
// console.log(`uppercase ${coursename.toUpperCase()}`)

// //only for even need to update to uppercase

// let modifiedCourseName = "";

// for (let i = 0; i < coursename.length; i++) {
//     if (i % 2 == 0) {
//         // Convert character at even index to uppercase
//        console.log(coursename[i].toUpperCase());
//     } 
// }

//console.log(modifiedCourseName);

let st="happy Learning Test Leaf"
let res=st.slice(2,10);
let substr=st.substring(2,10)
console.log(res)   //sub dtring and slice is doing the same
console.log(substr)
let splitonspce = st.split(" ");
console.log(splitonspce)



let companyname = "TestLeaf";
console.log("Actual string is "+ companyname)
function reverse()
{
   
   let chars= companyname.split("");
    // console.log(chars);
     let rev="";
    for(let i=companyname.length-1;i>=0;i--)
        {
            rev+=companyname[i];
       
        }
        return rev
  }
let resultreverse=reverse()
console.log("reveresed string is " + resultreverse)
if(companyname==resultreverse)
    {
        console.log("palindorme")
    }
    else
    {
        console.log("Not palindorme")
    }
console.log(reverse());


//Array of string can be reversed using reverse in built method
companyname = "TestLeaf";
let reversedstring=companyname.split("").reverse().join()  //array of string can be reversed
console.log(reversedstring);

