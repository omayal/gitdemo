/*optional parameter
default parameter

mandatory paramter cannot be defined after a optional parameter
*/
function userRegistration(fname, lname, year, gender, height) {
    console.log("register with ".concat(fname, ",").concat(lname, ",").concat(year, ",").concat(gender, ",").concat(height));
}
userRegistration('omayal', 'kattiressan', 1998, 'f'); // we have not given height here so undefined will come
//will take in the order it is defined
//default parameter 
//playwright has default timeout as 30 sec//we can override it
function profile(fname, dob, userpro) {
    if (userpro === void 0) { userpro = 'available'; }
    console.log("profile details ".concat(fname, ",").concat(dob, " ").concat(userpro));
}
profile("lavanya", "23/12/2024"); //default parameter is not needed to be mentioned in the calling function
profile("lavanya", "away", "23/12/2024"); //but we can override
