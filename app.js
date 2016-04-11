var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/src/views/';
app.use(express.static('public'));

var fs = require('fs'), 
    gruntfile;

// start grunt
gruntfile = __dirname + '/Gruntfile.js';
require(__dirname + '/node_modules/grunt/lib/grunt.js').cli({
  'gruntfile' : gruntfile
});

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


var _ = require("underscore");

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});
app.set('view engine', 'ejs');

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

//filter out the gender
router.get("/galery",function(req,res, next){

  var contents = fs.readFileSync("public/files/testFile.json");
  var obj = JSON.parse(contents);
  var genderSelected = req.query.gender

  var filtered = _.filter(obj.elements, function(element){
      return _.has(element, "gender") && element["gender"] === genderSelected;
  });
  req.filtered = filtered;
  next();
});

router.get("/galery",function(req,res){
    res.render(path + "galery", {
        elements: req.filtered
    });
	});
router.get("/checkList",function(req,res){
  res.sendFile(path + "checkList.html");
});

router.get("/final",function(req,res){
  res.sendFile(path + "final.html");
});

app.use("/",router);

app.listen(process.env.PORT || 3000,function(){
  console.log("Live at Port 3000");
});
