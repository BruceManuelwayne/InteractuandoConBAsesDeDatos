var fs = require('fs'),
  path = require('path')


module.exports = {
  getData: function() {
    let rutaJSON = __dirname + path.join('/data.json');
    return new Promise(function(resolve, reject) {
      fs.readFile(rutaJSON, 'utf8', function(err, readData) {
        if (err) reject(err)
        var dataJson = JSON.parse(readData)
        resolve(dataJson);
      });
    });
  }
};
