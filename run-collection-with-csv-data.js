var newman = require('newman');

newman.run({
    collection: require(`./data/DataDrivenTests.postman_collection.json`),
    reporters: ['cli','junit'],
    iterationData: './data/logins.csv'
}, function (err) {
    // finally, when the collection executes, print the status
    console.info(`'DataDrivenTests.postman_collection.json': ${err ? err.name : 'ok'}!`);
});