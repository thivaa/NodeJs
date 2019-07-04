var fs = require('fs');

fs.appendFile('Ukinode.txt', 'Uki studies web development courses   <br> ' , function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});





var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('Ukinode.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);







var fs = require('fs');

fs.appendFile('Ukinode.txt', 'Its on jaffna   <br> ' , function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});





var fs = require('fs');

fs.rename('Ukinode.txt', 'Ukinodesexercise1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});





var fs = require('fs');

fs.unlink('Ukinodesexercise1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});




