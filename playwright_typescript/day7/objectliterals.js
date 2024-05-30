/*
collection of key value pairs - called as properties
*/
// let objectname{key1:typeofit,key2:type}={
//     key1:value1,
//     key2:value2
// }
var user = {
    first_name: "om",
    name: "omayal", //key value
    age: 29,
    email: "omayal@gmail.com"
};
//how to acces 
//objectname.properties  =?dot notation
user.name;
//objetname["property"] =>bracket notation
console.log(user["name"]);
console.log(user["age"]);
//if object is going to have space in between or special character then use bracket
