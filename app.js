let express= require('express');
let bodyParser = require('body-parser');
let path = require('path');

var app = express();

let logger =(req,res,next)=>{
    console.log("logging...");
    next();
    
}
app.use(logger);

app.get("/",(req,res)=>{
    console.log("app with home");
    res.send("home page get request");
});

app.post("/",(req,res)=>{
    console.log("app with home post");
    res.send("home page post request");
    
});
app.listen(3020,()=>{
    console.log("Server Started at port 3020");
});