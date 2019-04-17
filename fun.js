var tools = require('./index2');
// var tools2 = require('./index');
var fs = require('fs');

var html = fs.readFileSync("./scrape.html");

console.log(tools.getInnerBody(html))