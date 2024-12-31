var express=require("express");

app=express();

app.get("/",function(req,res){
    res.send("Hello ExpressJS Home!");
})

app.get("/Contact",function(req,res){
    res.send("Hello ExpressJS Contact!");
}) 

app.get("/About",function(req,res){
    res.send("Hello ExpressJS About!");
})


app.listen(8080,function(){
    console.log("Server started on port 8080");
})