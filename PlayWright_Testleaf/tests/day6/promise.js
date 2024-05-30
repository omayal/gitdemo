const { errorMonitor } = require("events");

function fetchUSerData(userId)
{
return new Promise((resolve,reject) =>{       //callback because function called with in
  setTimeout(() => {
    if(userId===44)
        {
resolve({id:44,name:"omayal"})   //object literals

        }
    else{
reject(new Error("user not found"))
    }
  },3000)
})
}

//consuming promises

fetchUSerData(44)
.then(user=>{
    console.log('user found', user.name)
})
.catch(error=>{
    console.log('error')
})