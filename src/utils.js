var fs = require('fs');
var config = require('../config.js');

// Generalize in order to customize later
function output(data) {
    console.log(data);
}

function isContent() {
    return fs.existsSync(config.DB_FILE);
}

module.exports = {
    output: output,
    isContent: isContent
}
