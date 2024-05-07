function LaunchBrowser(browsername)
{
if(browsername=="chrome")
{
console.log("The browsername is " + browsername)
}
else if(browsername=="Firefox")
{
    console.log("The browsername is " + browsername)  
}
else if(browsername=="Safari")
{
    console.log("The browsername is " + browsername) 
}
else{
    console.log("The browsername is " + browsername)
}
}
function RunTest(TestType)
{
switch(TestType)
{
    case "Regression" :
        console.log("Testing Type is " + TestType)
        break

case "sanity" :
    console.log("Testing Type is " + TestType)
    break

default:
    console.log("Testing Type is " + TestType)
}
}

let brosname="chrome"
LaunchBrowser(brosname)

let TestTy="Sanity"
RunTest(TestTy)