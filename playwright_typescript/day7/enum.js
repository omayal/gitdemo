/*set of named  constants(will not change)

types of enum
1.numeric(default)
2.string
*/
var testresult;
(function (testresult) {
    testresult[testresult["pass"] = 1] = "pass";
    testresult[testresult["fail"] = 2] = "fail";
    testresult[testresult["skip"] = 3] = "skip";
})(testresult || (testresult = {}));
function logTestResult(testname, result) {
    console.log("testname is ".concat(testname, ",result code :").concat(result));
}
logTestResult("This is the name", testresult.fail);
/* string enums
no auto incrementing behaviour
*/
var browsertype;
(function (browsertype) {
    browsertype["chrome"] = "chrome";
    browsertype["safari"] = "safari";
    browsertype["firefox"] = "firefox";
})(browsertype || (browsertype = {}));
function launchbrowser(browsertypeval) {
    console.log("browser  is ".concat(browsertypeval));
}
launchbrowser(browsertype.chrome);
//hetrogenous enum
var browserstatus;
(function (browserstatus) {
    browserstatus[browserstatus["opened"] = 1] = "opened";
    browserstatus["closed"] = "closed";
})(browserstatus || (browserstatus = {}));
function reportbrowserstatus(status) {
    return "status  is ".concat(status);
}
reportbrowserstatus(browserstatus.opened);
console.log(browserstatus.closed);
