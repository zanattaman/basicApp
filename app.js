var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/src/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/question1",function(req,res){
  res.sendFile(path + "question1.html");
});

router.get("/result",function(req,res){
  res.sendFile(path + "result.html");
});

app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
