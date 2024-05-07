

function getBrowser()
{
if(browsername=="chrome")
{
    console.log( "supported browser")
}
else
{
    console.log( "un supported browser")
}
}

function getBrowserusingReturn(browsername)
{
if(browsername=="chrome")
{
    return "supported browser"
}
else if(browsername=="safari")
{
    return "supported browser too"
}
else
{
    return "un supported browser"
}
}

let browsername="chrome"
getBrowser();
 browsername="safari"
console.log(getBrowserusingReturn(browsername));


//switch case
//mutiple conditions
function browserversionswitch(){
    switch(browsername)
{
    case "chrome":
        console.log("chrome");
    break;
    case "safari":
        console.log("safari");
    break;
    case "firefox":
        console.log("firefox");
    break;
    default:
        console.log("none matches")
}
}

//break is not required when we return a statement
function browserversionswitchwithreturn(){
    switch(browsername)
{
    case "chrome":
        return "chrome";
    break;
    case "safari":
       return "safari";
    break;
    case "firefox":
        return "firefox";
    break;
    default:
        return "none matches";
}
}
browsername="firefox"

browserversionswitch()
console.log(browserversionswitchwithreturn());