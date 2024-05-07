const { log } = require("console");

/*
*3 types of variable in js
*var
*let
*const
var - re declarartion and function scope

best practices of variable naming conventions
meaningful name
a to z .A to Z .0-9
do not start with number or underscore

var and let -can take different value
const cannot be changed
*/
var firstname="omayal"
console.log(firstname);
var firstname ="Meena"
console.log(firstname);

/*
LET : reassignment is possible
block scope
*/
let secondname ="kattiresan"
console.log(secondname);
//let secondname="meena" --->not possible

// const cannot even be re assigned
const browsertype="firefox"
console.log(browsertype);
// browsertype="chrome"
// console.log(browsertype) //this will give an error

let gender='female'//global variable    
function Gender()
{
let age=28

if(gender.startsWith('f'))
{   var color="pink"
    let maritalstatus="married" //
console.log("Its she or her")
console.log(age)
console.log(maritalstatus);
console.log(color)
}
else{
    console.log("him/He")
}
console.log(color) //can access color 
//console.log(maritalstatus); // cannot access

}

Gender(); //calling a function


/*
hoisting 
variable hoisting


*/
// console.log(testingtype);
// var testingtype='regression'

// console.log(browsername);
// let browsername='safari'  //this will give 

let region
console.log(region)
region="chennai"


