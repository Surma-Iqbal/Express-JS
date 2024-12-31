var express=require("express");

app=express();

app.get("/",function(req,res){
    res.send("Hello ExpressJS!");
})
app.listen(8090,function(){
    console.log("Server started on port 8090");
})