var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
var request = require('request');

request
  .get('https://archive.org/wayback/available?url=google.com&timestamp=20150101',
  function (error, response, body) {
    var page = JSON.parse(body).archived_snapshots.closest.url;
    var childArgs = [path.join(__dirname, 'grab-page.js'), page];
    childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {})
  });
