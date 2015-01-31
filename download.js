var fs = require('fs'),
	path = require('path');
var request = require('ajax-request');

var zlib = require('zlib');
var http = require('http');

var mkdirSync = function(path) {
	try {
		fs.mkdirSync(path);
	} catch (e) {
		if (e.code != 'EEXIST') throw e;
	}
}


//read file
//fs.readFile('inegi.json', 'utf8', downloading);

// function downloading(err, data) {
// 	var json = JSON.parse(data);
// 	for (var i = 0; i < json.length; i++) {
// 		console.log(json[i].entidad);
// 		mkdirSync(path.join(json[i].entidad));
// 		download_file(json[i].url, json[i].clave + '-' + json[i].titulo, fun)
// 	};
// }
// 
var d = {
	"clave": "01001",
	"entidad": "Aguascalientes",
	"titulo": "Aguascalientes",
	"escala": "",
	"edicion": "2010",
	"datum": "ITRF92 época 1988.0 asociado al GRS80",
	//"url": "http://www3.inegi.org.mx/sistemas/biblioteca/sfi/OFile.aspx?_file=\\\\\\\\share-dgai\\\\prod_pdfgeo/prod_serv/contenidos/espanol/bvinegi/productos/geografia/urbana/SHP/Aguascalientes/SHP/702825582647_s.zip"
	url: "http://ow.ly/Ia1d3"
}



request.download({
	url: d.url,
	rootPath: ''
}, function(err, res, body, destpath) {
	console.log('dowload');

});


// var download = function(url, dest, cb) {
// 	var file = fs.createWriteStream(dest);
// 	var request = http.get(url, function(response) {
// 		response.pipe(file);
// 		file.on('finish', function() {
// 			file.close(cb); // close() is async, call cb after close completes.
// 		});
// 	});
// }
// download(d.url, '.zip', fun)
// //
// function fun() {
// 	console.log('dd');
// }