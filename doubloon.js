var fs = require('fs');

function save(fileName, fileContents, callback) {
	var tempFileName = fileName + '.tmp1';

	fs.writeFile(tempFileName, fileContents, function (err) {
		swapFiles(fileName, tempFileName, callback);
	});
}

function swapFiles(fileName, tempFileName, callback) {
	fs.unlink(fileName, function (err) {
		fs.rename(tempFileName, fileName, function (err) {
			callback();
		});
	});
}

module.exports = {
	save: save
};
