var newman = require('newman'); 
var async = require('async');

var timestamp = Date.now();

function options() {
    timestamp +=1;
    obj = {
        collection: require('./collections/sample-collection.json'),
        reporters: 'emojitrain',
        reporter: {
        }
    }
    return obj;
}

parallelCollectionRun = function(done) {
    newman.run(options(), done);
};

// create array and to run X times requests in parallel
requestsArray = Array(10).fill(parallelCollectionRun);

async.parallel (requestsArray, function (err, results) {
    err && console.error(err);

    results.forEach(function (result) {
        var failures = result.run.failures;
        console.info(failures.length ? JSON.stringify(failures.failures, null, 2) :
            `${result.collection.name} ran successfully.`);
    });
});
