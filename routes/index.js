
var express = require('express');
var router = express.Router();

const User = require('./../models/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/retrive', function(req, res, next) {
  User.find({}).limit(1).sort('-createdAt').exec(function(err, result){
    if(err) {
      console.log(err);
    }
    console.log(result);
    res.json(result[0]);
  });
});
router.post('/store',function(req,res,next){
      var cherry=new User({
        a:req.body.s  // this is an array
      }).save(function(error,result){
        if(error)
        console.log(error);
         next(error);

        if(result) {
          console.log("data saved");
          res.send("sucessful");
          
        }
      })
});

module.exports = router;
