//push -pushes element at the last and return new lenght of array

const { log } = require("console")

let userprofile=['ramya','omayal','Meena']
let lenisreturned=userprofile.push('vasi','hema')
console.log(lenisreturned)
console.log(userprofile)

//remove the last element from aarayy
 
let pop=userprofile.pop()
console.log(pop);
console.log(userprofile);

//remove first element from array
let shift=userprofile.shift()
console.log(shift);
console.log(userprofile);

//add one or more elements to the beginning of the array and return the number of elements in the array after addition

let unshift=userprofile.unshift('murugappan');
console.log(unshift);
console.log(userprofile);

//slice-returns the sliced value
//ending value -endvalue-1
let sliced=userprofile.slice(1,3)
console.log(sliced)
console.log(userprofile)

//splice -change the content of the array by either removing or replacing the elements
let autotools=['selenium','playwright','webdriver','cypress']
let splice=autotools.splice(0,2)
console.log(splice)
console.log(autotools)

autotools.splice(1,1,"idk")//can replace as well 
console.log(splice)
console.log(autotools)

//array is heterogenous in javascript
let mixedarray=['omayal',1, true , ['sanity','regression']]
console.log(mixedarray)

//join -> join an array to string using '-'
let browserversion= [103.5,18.9,10.3]
let joinedstring=browserversion.join('-')
console.log(joinedstring)

//concat - merge 2 arrays
let array1=[1,2,3,4]
let array2=[5,6,7,8]
let newarray=array1.concat(array2)
console.log(array1);
console.log(array2);
console.log(newarray);

//sort
let num=[1,4,8,3]
console.log(num)
let sort=num.sort() //double digit a-b is used for calculation
console.log(sort);


//reverse  -order only reverses be it number or string
num.reverse()
console.log(num);
console.log(userprofile)
userprofile.reverse();
console.log(userprofile)

//spread syntax
let arr1=['a','b','c','d','e']
let arr2=[...arr1,'f','g'] //arr1 is spreed out here 
console.log(arr2);

const numbers =[1,2,3,4,5]
const square =numbers.map(num=>num*num)//returns the array that contains the resukt 
console.log(square);

const array=[6,79,9,2,4]
const ascending=array.sort((a,b)=>a-b);//negative a comes first and b comes second
console.log(ascending)
const descending=array.sort((a,b)=>b-a);//+ve b comes first and a comes second
console.log(descending)