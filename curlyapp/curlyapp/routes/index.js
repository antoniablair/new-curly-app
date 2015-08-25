var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curly or Straight?' });
});

router.post('/', function(req, res, next){
	res.render('forecast', {title: 'Your Curly Forecast'});
});

// exports.index = function(req, res){
//   res.render('index', { title: 'Here comes your results' });
// };

exports.getWeather = function(req, res){
    var cityName = req.body.txtCity;
    weather.getWeather(cityName,function(data){
        if(data.status){
          data = JSON.parse(data.info);
          console.log(data);
          res.render('forecast');
        }
      });
};

module.exports = router;
