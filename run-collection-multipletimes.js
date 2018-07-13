var newman = require('newman'); 
var async = require('async');

var timestamp = Date.now();

function options() {
    timestamp +=1;
    obj = {
        collection: require('./collections/sample-collection.json'),
        reporters: 'html',
        reporter: {
            html: {
                template: './templates/bright-template.hbs',
                export: './reports/parallelReport' + timestamp + '.html'
            }
        }
    }
    return obj;
}

parallelCollectionRun = function(done) {
    newman.run(options(), done);
};

async.parallel ( [
    parallelCollectionRun,
    parallelCollectionRun,
    parallelCollectionRun,
    parallelCollectionRun,
    parallelCollectionRun
],

function (err, results) {
    err && console.error(err);

    results.forEach(function (result) {
        var failures = result.run.failures;
        console.info(failures.length ? JSON.stringify(failures.failures, null, 2) :
            `${result.collection.name} ran successfully.`);
    });
});
