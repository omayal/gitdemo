//function that make another function as argument inside it is called the call back function
function processUserinfo(callback)
{
let name=prompt("please enter your name") 
//promt is type of alert
callback(name)
}
        
function displayName(name)
{
   alert("hello"+name) 
}
function donotEnter(name)
{
   alert("donotEnter"+name) 
}
//calling funcion
processUserinfo(donotEnter);

//since its alert execute in browser   