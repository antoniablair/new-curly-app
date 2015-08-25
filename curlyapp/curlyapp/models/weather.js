var http = require(http);

exports.getWeather = function(cityName, callback) {
	var data = "";

	var params = {
		hostname: "api.openweathermap.org",
		path: "/data/openweathermap.org/data/2.5/box/find?q="+cityName
		method: "GET"
	};

	var request = http.request(params, function(response) {
		response.on("data", function(chunk) {
			weatherData += chunk.toString("utf8");
	});

	response.on("error", function(e) {
		callback({
			status: false,
			message: e.message
		});
	});

	response.on("end", function(){
		callback({
			status: true,
			message: "Got weather!",
			info: weatherData
		});
	});
});

request.end();