var page = require('webpage').create(),
  system = require('system'), address;

if (system.args.length === 1) {
  console.log('Usage: grab-page.js <some URL>');
  phantom.exit();
}
address = system.args[1];

page.open(address, function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    var suffix = Date.now();
    page.render('output/output-' + suffix + '.png');
  }
  phantom.exit();
});
