var fs = require('fs');
var path = require('path');
var request = require('request');
var open = require('open');

var mkdirSync = function(path) {
	try {
		fs.mkdirSync(path);
	} catch (e) {
		if (e.code != 'EEXIST') throw e;
	}
}

//read file
fs.readFile('inegi.json', 'utf8', downloading);

function downloading(err, data) {
	var json = JSON.parse(data);
	for (var i = 2; i < 4; i++) {
		console.log(json[i].entidad);
		mkdirSync(path.join(json[i].entidad));
		open(json[i].url);
	};
}