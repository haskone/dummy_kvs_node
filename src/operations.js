var utils = require('./utils.js');
var store = require('./store.js');
var constants = require('./constants.js');

var config = require('../config.js');

let storeInstance = new store.Store(config.DB_FILE);

let OPERATION_MAP = {
    help: () => {
        utils.output(constants.GENERAL_INPUT_HINT);
    },
    add: (key, value) => {
        if (key == null || value == null) {
            utils.output(constants.WRONG_ADD_INPUT);
            return;
        }
        storeInstance.add(
            key,
            value,
            (key, value) => utils.output(`Added as: ${key} | ${value}`)
        )
    },
    remove: key => {
        if (key == null) {
            utils.output(constants.WRONG_REMOVE_INPUT);
            return;
        }
        if (!utils.isContent()) {
            utils.output(constants.NO_CONTENT_ERORR);
            return;
        }
        storeInstance.remove(
            key,
            (key, value) => utils.output(`Removed: ${key} | ${value}`)
        )
    },
    get: key => {
        if (key == null) {
            utils.output(constants.WRONG_GET_INPUT);
            return;
        }
        if (!utils.isContent()) {
            utils.output(constants.NO_CONTENT_ERORR);
            return;
        }
        storeInstance.get(
            key,
            value => utils.output(value)
        )
    },
};

module.exports = {
    OPERATION_MAP: OPERATION_MAP
}
