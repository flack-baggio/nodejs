var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response) {
	console.log("Request handler 'start' was called.");
	
	fs.readFile('./upload.html', 'UTF-8', function(err, body) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	});
}

function upload(response, request) {
	console.log("Request handler 'upload' was called.");
	
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files){
		console.log("parsing done");
		
		fs.rename(files.upload.path, "/tmp/test.jpg", function(err){
			if(err){
				fs.unlink("/tmp/test.jpg");
				fs.rename(files.upload.path, "tmp/test.jpg");
			}
		});
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(response, postData) {
	console.log("Request handler 'show was called.");
	fs.readFile("/Users/anzaikatsuji/Documents/壁紙/autumn-drops-wallpapers_7318_1280x800.jpg", "binary", function(error, file){
		if(error){
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "¥n");
			response.end();
		}
		else{
			response.writeHead(200, {"Content-Type": "image/jpeg"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;