let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

var app = express();

//view engine middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("/css", path.join(__dirname, "\\node_modules\\bootstrap\\dist\\css"));

//bodyParser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static path
app.use(express.static(path.join(__dirname, "public")));

//assume get user records from some db 
let users = [
    {
      id: 1,
      first_name: "Muhammad",
      last_name: "shafiq",
      email: "shafiqkhuidad@gmail.com"
    },
  
    {
      id: 2,
      first_name: "Muhammad",
      last_name: "adnan",
      email: "adnankhuidad@gmail.com"
    },
    {
      id: 3,
      first_name: "Muhammad",
      last_name: "khan",
      email: "khankhuidad@gmail.com"
    },
  
    {
      id: 4,
      first_name: "khan",
      last_name: "shafiq",
      email: "shafiqkhan@gmail.com"
    }
  ];

//Routes 
app.get("/", (req, res) => {
  console.log("app with home");
  console.log(app.get("/css"));
  res.render("index");
});

app.post("/", (req, res) => {
  console.log("app with home post");
  let formData = req.body;
  let count = users.length;
  count = count+1;
  users.push({id:count,first_name:formData.fname,last_name:formData.lname,email:formData.email})
  res.render("view", formData);
});


app.get("/users",(req,res)=>{
    console.log("/user =>");
    console.log(users);
    res.render("users",{title:"users",users:users});
});
app.listen(3020, () => {
  console.log("Server Started at port 3020");
});
