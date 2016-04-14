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