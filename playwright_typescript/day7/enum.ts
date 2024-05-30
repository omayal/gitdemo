/*set of named  constants(will not change)

types of enum
1.numeric(default)
2.string
*/

enum testresult
{
    pass=1, //by default numeric enaums will be 0 and auto incremented
    fail,
    skip
}

function logTestResult(testname :string ,result:testresult) :void
{
console.log(`testname is ${testname},result code :${result}`)
}

logTestResult("This is the name",testresult.fail)


/* string enums
no auto incrementing behaviour
*/

enum browsertype
{
    chrome= "chrome",
    safari= "safari",
    firefox="firefox"
}


function launchbrowser(browsertypeval :browsertype) :void
{
console.log(`browser  is ${browsertypeval}`)
}

launchbrowser(browsertype.chrome)


//hetrogenous enum

enum browserstatus{
    opened=1,
    closed="closed",
}
function reportbrowserstatus(status :browserstatus) :string
{
return `status  is ${status}`
}

reportbrowserstatus(browserstatus.opened)
console.log(browserstatus.closed)
