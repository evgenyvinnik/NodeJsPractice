var fs = require('fs');
var dat = require('./data.json');

console.log(dat.bla);

fs.readFile('data.json', 'utf-8', (err, data) => {
  var dat = JSON.parse(data);
  console.log(dat.bla);
})


fs.readdir('C:/', (err, data) => {
  var dat = JSON.parse(data);
  console.log(dat.bla);
});