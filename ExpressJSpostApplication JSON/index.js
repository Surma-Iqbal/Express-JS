var express=require("express");
var bodyParser=require("body-parser")
var app=express();
app.use(bodyParser.json());

// Post Application JSON
//Post request can not be run in browser but in Postman
app.post("/",function(req,res) {
    let JSONData=req.body;
    let JSONString= JSON.stringify(JSONData)
   
    res.send(JSONString);
})





app.listen(8080,function(){
    console.log("Server started on port 8080");
})