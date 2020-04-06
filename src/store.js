var fs = require('fs');
var readline = require('readline');

var utils = require('./utils.js');
var constants = require('./constants.js');

class Store {
    constructor(filename) {
        this.filename = filename;
    }

    remove(key, callback) {
        const fileStream = fs.createReadStream(this.filename);
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });
      
        // Let's keep it very simple and not use
        // buffers but just an array
        let newContentBuffer = [];
        rl.on('line', (line) => {
            let [dbKey, dbValue] = line.split(constants.KEY_VALUE_SEP);
            if (key === dbKey) {
                callback(key, dbValue);
            } else {
                newContentBuffer.push(line);
            }
        }).on('close', () => {
            fs.writeFile(
                this.filename,
                `${newContentBuffer.join(constants.LINE_SEP)}${constants.LINE_SEP}`,
                (err) => {
                    if (err) {
                        utils.output(err);
                    }
                }
            );
        });
    }

    add(key, value, callback) {
        const dbValue = `${key}${constants.KEY_VALUE_SEP}${value}${constants.LINE_SEP}`;
        fs.appendFile(this.filename, dbValue, 'utf8', (err) => {
            if (err) {
                utils.output(err);
            }
            callback(key, value);
        });
    }

    get(key, callback) {
        const fileStream = fs.createReadStream(this.filename);
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            let [dbKey, dbValue] = line.split(constants.KEY_VALUE_SEP);
            if (key === dbKey) {
                callback(dbValue);
            }
        });
    }
}

module.exports = {
    Store: Store
}
