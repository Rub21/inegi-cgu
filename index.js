var cheerio = require('cheerio'),
	fs = require('fs');
var data_inegi = [];
fs.readFile('d1.html', 'utf8', dataLoaded);
fs.readFile('d2.html', 'utf8', dataLoaded);
fs.readFile('d3.html', 'utf8', dataLoaded);
fs.readFile('d4.html', 'utf8', dataLoaded);
fs.readFile('d5.html', 'utf8', dataLoaded);
setTimeout(function() {
	fs.writeFile("inegi-2.json", JSON.stringify(data_inegi), function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("The file was saved!");
		}
	});

}, 60000);

function dataLoaded(err, data) {
	$ = cheerio.load(data);
	var tr = $("#GridResultados tbody tr");
	console.log(tr.length);
	for (var i = 2; i < tr.length - 1; i++) {
		if (i < 10) {
			j = '0' + i;
		} else {
			j = i
		}
		var clave = '#GridResultados_ctl' + j + '_clave_carta';
		var entidad = '#GridResultados_ctl' + j + '_desc_entidad';
		var titulo = '#GridResultados_ctl' + j + '_titulo';
		var escala = '#GridResultados_ctl' + j + '_escala';
		var edicion = '#GridResultados_ctl' + j + '_edicion';
		var datum = '#GridResultados_ctl' + j + '_datum';
		var soft = '#GridResultados_ctl' + j + '_desc_soft';
		var url_file = $(soft + ' a').attr('href').replace('&idusr=0', '').replace('_d.zip', '_s.zip');
		var id_file = url_file.substr(url_file.indexOf("SHP/"));
		id_file = id_file.substr(id_file.indexOf("/SHP/") + 5).replace('_s.zip', '');
		var json = {
			clave: $(clave).text(),
			entidad: $(entidad).text(),
			titulo: $(titulo).text(),
			escala: $(escala).text(),
			edicion: $(edicion).text(),
			datum: $(datum).text(),
			url: 'http://www3.inegi.org.mx/sistemas/biblioteca/sfi/' + url_file,
			id_file: id_file
		};
		data_inegi.push(json);
	};

}