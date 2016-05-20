'use strict';

const ParseConfig = require('./parse-config.js');

var prompt = require('prompt');
var Parse = require('parse/node');
Parse.serverURL = PARSE_SERVER_URL;
Parse.initialize(ParseConfig.PARSE_APP_ID, ParseConfig.PARSE_JAVASCRIPT_KEY, ParseConfig.PARSE_MASTER_KEY);
Parse.Cloud.useMasterKey();

prompt.start();

var fileName, className, generateRnd;

var schema = {
  properties: {
    fileName: {
      description: 'Enter filename to import',
      default: 'data.json'
    },
    className: {
      description: 'Enter class name to be imported to',
      required: true
    },
    generateRnd: {
      description: 'Generate RND field (support get object randomly)? (true/false)',
      type: 'boolean',
      default: false
    }
  }
};

prompt.get(schema, function(err, result) {
  fileName = result.fileName;
  className = result.className;
  generateRnd = result.generateRnd;

  importDataToParse(fileName, className, generateRnd);
});

const importDataToParse = function(fileName, className, generateRnd) {
  var data = require(`./${fileName}`).results;
  if (!data || !data.length) throw 'Invalid data format, please check your data file!';

  var ClassName = Parse.Object.extend(className);
  var index = 0;

  promiseWhile(() => {
    return index < data.length;
  }, () => {
    var objData = data[index++];

    console.log(`Importing to ${className}: ${index}`);

    var newObject = new ClassName();
    if (generateRnd) objData.rnd = Math.random();
    return newObject.save(objData);
  }).then(() => {
    console.log('Done!');
  });
}

const promiseWhile = function(condition, body) {
  var promise = new Parse.Promise();

  function loop() {
    if (!condition()) return promise.resolve();
    body().then(loop, promise.reject);
  }

  loop();

  return promise;
}
