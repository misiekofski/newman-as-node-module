var newman = require('newman'); 
var fs = require('fs');

var timestamp = Date.now();

fs.readdir('./collections', function (err, files) {
    if (err) { throw err; }

    // we filter all files with JSON file extension
    files = files.filter(function (file) {
        return (/^((?!(package(-lock)?))|.+)\.json/).test(file);
    });

    // now we iterate on each file name and call newman.run using each file name
    files.forEach(function (file) {
        newman.run({
            collection: require(`./collections/${file}`),
            reporters: ['cli','json'],
            reporter: {
                json: {
                    export: './reports/report-' + file
                }
            }
        }, function (err) {
            // finally, when the collection executes, print the status
            console.info(`${file}: ${err ? err.name : 'ok'}!`);
        });
    });
});