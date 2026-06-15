import fs from "fs";
// reading a file with call backs
let data= fs.readFile("sample.txt",'utf-8',(err,data)=>
{
  if(err){
    console.log("Error Reading file",err);
    return;
  }
  console.log("File Content: ",data);
  
})
// reading a file using async and await


main()