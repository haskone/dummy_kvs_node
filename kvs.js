#!usr/bin/node

// 1. kvs add {KEY} {VALUE}
// 2. kvs remove {KEY}
// 3. kvs get {KEY}

var utils = require('./src/utils.js');
var constants = require('./src/constants.js');
var operations = require('./src/operations.js');

function run() {
    let op = operations.OPERATION_MAP[process.argv[2]];
    let params = process.argv.slice(3);

    if (op != null && params.length > 0) {
        op(...params);
    } else {
        utils.output(constants.GENERAL_INPUT_HINT);
    }
}

run();
