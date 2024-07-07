const express=require("express");
const app=express();
require("./db/conn");
const port=process.env.port||3000;
app.get("/",(req,res)=>{
    res.send('Hello from vamshi')
});
app.listen(port,()=>{
    console.log('not running');
})