var newman = require('newman'); 
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });

function cleanUpDatabase() {
    var sqlQuery = 'DELETE FROM TestTable WHERE ColumName LIKE "[POSTMAN]%";';
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Połączono z bazą.");
        con.query(sqlQuery, function (err, result) {
          if (err) throw err;
          console.log("Usunieto wierszy: " + result);
        });
      });
}

newman.run({
    collection: require('./collections/sample-collection.json'),
    globals: require('./envs/TEST.postman_environment.json'),
    iterationCount: 1,
    delayRequest: 0,
    insecure: true,
    reporters: 'html',
    reporter: {
        html: {
            template: './templates/dark-template.hbs',
            export: './reports/dark-report.html'
        }
    }
}).on('start', function (err, args) { 
    console.log('Uruchamiam kolekcje...');
    // przed testami można wywołać dowolny kod
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('Nie udało sie wykonać testów.');
    }
    else {
        console.log('Testy zakończono.');
        // po testach możemy na przykład posprzątać w bazie
        // cleanUpDatabase();
    }
});