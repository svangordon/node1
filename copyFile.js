var fs = require('fs')

var sourceFile = process.argv[2]
var destinationFile = process.argv[3]

fs.readFile(sourceFile, 'utf8', function (err, data) {
	if (err) {
		throw err
	}
	fs.writeFileSync(destinationFile, data, 'utf8')
})