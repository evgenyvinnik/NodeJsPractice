fs = require('fs');

function phonenumber(err, data) {
  console.log(data);
}

data = fs.readdir('C:/', phonenumber);

console.log("finished");