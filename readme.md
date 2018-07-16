# Newman as Node module:

Some examples for newman runner below

## Instructions for install
* Clone this repository
* Install https://nodejs.org/en/
* Run `npm install` from main folder (it requires package.json)

## Usage:
* `dev-run-collection.js` is a module which runs collection with some options, and then connects to DB and clears test data
* `test-run-collection.js` is a module which runs collection with some other options, and then connects to DB and clears test data
* `run-collection-multipletimes.js` is a module which runs collection asyn 100 times in parallel (load tests)
* `run-collections-from-folder.js` is a module which runs all collections from a given folder

## Structure:
* use `/collections` to export tests created in postman
* use `/envs/` to export environment settings and variables created in postman
* use `/templates` to store your own modified templates for html reports
* reports will be created in `/reports` folder which is ignored by this git repository
