var fs = require('fs');

function save(fileName, fileContents, callback) {
	var tempFileName = fileName + '.tmp1';

	fs.writeFile(tempFileName, fileContents, function (err) {
		swapFiles(fileName, tempFileName, callback);
	});
}

function swapFiles(fileName, tempFileName, callback) {
	var oldFileName = fileName + 'tmp2';

	fs.rename(fileName, oldFileName, function (err) {
		fs.rename(tempFileName, fileName, function (err) {
			fs.unlink(oldFileName, function (err) {
				callback();
			});
		});
	});
}

module.exports = {
	save: save
};

