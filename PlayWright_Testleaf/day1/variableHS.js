/*home assignment
Let . const .Var
*/
const browserversion="Chrome"
//console.log(browserversion);
function getBrowserVersion()
{
    if(browserversion.startsWith("C")) //variable in used but initialisation is done only in line number 10
    {
       let browserversion="chrome" //var browserversion="chrome" =>in Var alone variable hoisting is happening if you use let the problem will be resolved
        console.log("inside" + browserversion)
    }
    console.log(browserversion)
}
getBrowserVersion()


/*below is one more way possible where we will not re declare but declare only once globally with var or let
var browserversion="Chrome"  =>let also works 
//console.log(browserversion);
function getBrowserVersion()
{
    if(browserversion.startsWith("C")) //variable in used but initialisation is done only in line number 10
    {
        browserversion="chrome" //var browserversion="chrome" =>in Var alone variable hoisting is happening if you use let the problem will be resolved
        console.log("inside" + browserversion)
    }
    console.log(browserversion)
}
getBrowserVersion() */


//hoisting is the process where decleration goes up that is where it is used .But initialisation happens only the actual area here we have initialised
/*You are correct that simply changing the type of the global declaration of browserversion from const to var or let without altering the variable's behavior inside the function would not resolve the issue of variable shadowing and hoisting confusion in the function. The core issue remains the redeclaration of browserversion inside the function which is problematic due to JavaScript's scoping rules and how var handles hoisting.

Explanation:
Global var or let Declaration:
If you declare browserversion globally as var or let and then redeclare it with var within the function, JavaScript will treat the two declarations as separate due to their scopes (var is function-scoped, and let is block-scoped). The redeclaration inside the function essentially creates a new browserversion local to that function.
Function Execution with var or let:
When the function getBrowserVersion() is called, and it reaches the if statement, the locally declared var browserversion (due to hoisting) is considered uninitialized (i.e., undefined) at that point. The statement browserversion.startsWith("C") would then throw an error because undefined does not have a startsWith method.
Using let in the Function:
Switching to let or const for the redeclaration inside the function would result in a temporal dead zone error if accessed before the declaration is executed. let does not hoist the declaration in the same way var does, so the error would be slightly different but still prevent the function from running correctly.
Practical Code Adjustment:
If you are using var, let, or const globally and want to avoid these issues, it's best not to redeclare the variable inside the function. Here's how you can manage this:

javascript
Copy code
let browserversion = "Chrome"; // or var browserversion = "Chrome";
console.log(browserversion);

function getBrowserVersion() {
    // No redeclaration, use the global variable directly
    if (browserversion.startsWith("C")) {
        console.log("inside " + browserversion); // Using the global variable
    }
    console.log(browserversion); // Still using the global variable
}

getBrowserVersion();
In this setup, there is no redeclaration of the variable inside the function, which eliminates confusion and avoids errors related to hoisting or temporal dead zones. It uses the global browserversion consistently throughout the function.*/