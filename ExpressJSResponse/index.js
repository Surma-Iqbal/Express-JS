var express=require("express");

app=express();


//Simple String Response(send method)

/*app.get("/one",function(req,res){
    res.send("This is Simple String Response!");
})

app.post("/two",function(req,res){
    res.send("This is Simple String Response!");
})*/




//Simple String Response(end method)

/*app.get("/one",function(req,res){
    res.end("This is Simple String Response!");
})

app.post("/two",function(req,res){
    res.end("This is Simple String Response!");
})*/



// Response Status manipulation

/*app.get("/three",function(req,res){
    res.status(401).end();
})
*/


//JSON Response

/*app.get("/four",function(req,res){
    let myJSONarray=[
        {
            name:"Rabbil",
            city:"Dhaka",
            age:"34",
        },

        {
            name:"Monib",
            city:"Borishal",
            age:"25",
        }
    ]
res.json(myJSONarray);


})*/


// Response Download

/*app.get("/five",function(req,res){
    res.download("./upload/abc.jpg")
})*/

// Response Redirect

/*app.get("/Bangladesh",function(req,res){
    res.redirect("http://localhost:8080/India")
})

app.get("/India",function(req,res){
    res.send("This is India")
})*/


//Response Header

/*app.get("/six",function(req,res){

    res.append("name","Rabbil");
    res.append("city","Dhaka");
    res.append("age","34");
    res.append("occupation","Engineer");

    res.send("Hello World");

    res.status(201).end();
           
})*/


//Response Cookies

/*app.get("/seven",function(req,res){

    res.cookie("name","Rabbil");
    res.cookie("city","Dhaka");
    res.cookie("age","34");
    res.cookie("occupation","Engineer");

    res.end("Cookie set successfully");
           
})*/


//Response Clear Cookies practice

/*app.get("/eight",function(req,res){

       res.clearCookie("age");
    res.clearCookie("occupation");

    res.end("Cookie clear Successfully")
           
})
*/

app.listen(8080,function(){
    console.log("Server started on port 8080");
})