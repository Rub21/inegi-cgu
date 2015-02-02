var fs = require('fs');
// var path = require('path');
var open = require('open');

// var mkdirSync = function(path) {
// 	try {
// 		fs.mkdirSync(path);
// 	} catch (e) {
// 		if (e.code != 'EEXIST') throw e;
// 	}
// }

//read file
fs.readFile('inegi.json', 'utf8', downloading);

function downloading(err, data) {
	var json = JSON.parse(data);
	console.log('Files to download : ' + json.length);
	for (var i = 0; i < json.length; i++) {
		//mkdirSync(path.join(json[i].entidad));
		open(json[i].url);
	};
}