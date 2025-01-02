var express=require("express");
var multer=require("multer");
var multer=multer();

//Multipart Form Data

var app=express();
app.use(multer.array())
app.use(express.static('public'))

app.post("/",function(req,res) {
    let JSONData=req.body;
    res.send(JSON.stringify(JSONData))
   
    
})


app.listen(8080,function(){
    console.log("Server started on port 8080");
})