var express=require("express");
var app=express();


//Simple Get Request Method

/*app.get("/",function(req,res){
    res.end("This is Simple Get Request Response!");
})*/


// Request query

/*app.get("/",function(req,res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    //res.end("firstName + lastName"); ei line ta likhle ki bhool hobe?
    res.end(firstName + "   "+ lastName);
})*/

// Working with Get Request Header

/*app.get("/",function(req,res) {
    let firstName = req.header("firstName");
    let lastName = req.header("lastName");
    //res.end("firstName + lastName"); ei line ta likhle ki bhool hobe?
    res.end(firstName + "   "+ lastName);
})*/


// Working with Post Request 
//Post request can not be run in browser but in Postman
/*app.post("/",function(req,res) {
       res.send("This is Simple Post Request!");
})*/


// Working with Post Request with URL query
//Post request can not be run in browser but in Postman
/*app.post("/",function(req,res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    //res.send("firstName + lastName"); ei line ta likhle ki bhool hobe?
    res.send(firstName + "   "+ lastName);
})*/


// Working with Post Request Header
//Post request can not be run in browser but in Postman
/*app.get("/",function(req,res) {
    let userName = req.header("userName");
    let password = req.header("password");
    //res.send("userName + password"); ei line ta likhle ki bhool hobe?
    res.send(userName + "   "+ password);
})*/



app.listen(8080,function(){
    console.log("Server started on port 8080");
})