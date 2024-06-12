import { chromium, expect, test } from "@playwright/test";

const url = "https://dev242707.service-now.com/";
const auth= "Basic YWRtaW46SG9vZGVkQDI="
let chg_num="";
let sysid="";

test(`Test to create a new incident`, async({request})=>{

//To create a new incident
const response = await request.post(`${url}/api/now/table/change_request`,
{
headers:{
"Content-Type":"application/json",
"Authorization": auth
},
data:{
"short_description": "Created via Playwright"
}
})


//To get the json response
const responseBody = await response.json();
console.log(responseBody);

//To get the status code
const apiStatusCode = response.status();
console.log(`The status code is ${apiStatusCode}`);
//Assertion
expect(apiStatusCode,`expecting api status code to be 201`).toBe(201)


//To get the incident number
chg_num = responseBody.result.number;
sysid=responseBody.result.sys_id
console.log(`The change number: ${chg_num}`); 
console.log(`The change sysid: ${sysid}`); 


})


test(`Test to get the newly incidents`, async({request})=>{

const getResponse = await request.get(`${url}/api/now/table/change_request/${sysid}`,
{
headers:{
"Content-Type":"application/json",
"Authorization": auth
}
}
)
//To get the json response
const responseBody = await getResponse.json();
console.log(responseBody);

//To get the status code
const apiStatusCode = getResponse.status();
console.log(`The status code is ${apiStatusCode}`);
//Assertion
expect(apiStatusCode,`expecting api status code to be 200`).toBe(200)

})

test(`Test to patch the created incident`, async({request})=>{

    const getResponse = await request.patch(`${url}/api/now/table/change_request/${sysid}`,
    {
    headers:{
    "Content-Type":"application/json",
    "Authorization": auth
    },
    

    data:{
        "short_description": "Patching via playwright"
        }
    }
    )
    //To get the json response
    const responseBody = await getResponse.json();
    console.log(responseBody);
    
    //To get the status code
    const apiStatusCode = getResponse.status();
    console.log(`The status code is ${apiStatusCode}`);
    //Assertion
    expect(apiStatusCode,`expecting api status code to be 200`).toBe(200)
    
    })

    test(`Test to Delete the newly incidents`, async({request})=>{

        const getResponse = await request.delete(`${url}/api/now/table/change_request/${sysid}`,
        {
        headers:{
        "Content-Type":"application/json",
        "Authorization": auth
        }
        }
        )
           
        //To get the status code
        const apiStatusCode = getResponse.status();
        console.log(`The status code is ${apiStatusCode}`);
        //Assertion
        expect(apiStatusCode,`expecting api status code to be 204`).toBe(204)
        
        })
        