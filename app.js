let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

var app = express();

//bodyParser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static path
app.use(express.static(path.join(__dirname, "public")));

let people = [
  {
    name: "shafiq",
    age: 22
  },
  {
    name: "adnan",
    age: 10
  },
  {
    name: "khan",
    age: 23
  }
];

app.get("/", (req, res) => {
  console.log("app with home");
  res.send(people);
});

app.listen(3020, () => {
  console.log("Server Started at port 3020");
});
