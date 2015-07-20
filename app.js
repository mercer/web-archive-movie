
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
var request = require('request');
const site = 'google.com';

dates().forEach(function(date) {
  var url = 'https://archive.org/wayback/available?url=' + site + '&timestamp=' + date;
  console.log('fetching ', url);
  request
    .get(url,
    function (error, response, body) {
      var page = JSON.parse(body).archived_snapshots.closest.url;
      var childArgs = [path.join(__dirname, 'grab-page.js'), page];
      childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {});
    });
});

function dates() {
  var output = [];
  ['2013', '2014', '2015'].forEach(function(year) {
    ['01', '02', '03', '04', '05', '06', '07', '08'
    , '09', '10', '11', '12'].forEach(function(month) {
     output.push(year + month + '01'); 
    });
  });
  return output;
}