//u are informing the compiler about the type of the variable
//type should be string 
//over riding the actual type 
 //can define using 1)angle brackets 2)'as'

 let response: any="record created sucessfully"
 let myresponse :string =<string>response   //since i know response is string , we can override any to string
 let len :number=myresponse.length
 console.log(myresponse);
 console.log(typeof myresponse);
 console.log(len)


 let statuscode: any='success';
 let statuslength:number =(statuscode as string).length;  //with manupulation its number
 console.log(statuslength)