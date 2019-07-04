exports.S = function () {
var  x=123,
  y=321,
  z=x+y;
  return z;
};
exports.A = function () {
var  x=123,
  y=321,
  z=(x+y)/2;
  return z;
};

var http = require('http');
var d = require('./ex_1');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("sum: " + d.S() + '<br>' + "AVG: " + d.A());
 res.end();
}).listen(8080);
