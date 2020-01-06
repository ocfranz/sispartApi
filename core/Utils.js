const fs = require('fs');
const path = require('path');

const getModelsFromDirectory = (dir) => {
    return fs.readdirSync(dir).reduce(function(list, file) {
        var name = path.join(dir, file);
        var isDir = fs.statSync(name).isDirectory();
        return list.concat(isDir ? getModelsFromDirectory(name) : [name]);
      }, []);
}

module.exports = {getModelsFromDirectory}