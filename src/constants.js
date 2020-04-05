var os = require('os');

const GENERAL_INPUT_HINT = `\
Use one of the following way:\n\
    - kvs add {KEY} {VALUE}\n\
    - kvs remove {KEY}\n\
    - kvs get {KEY}\
`;

const NO_CONTENT_ERORR = 'No content added yet';
const WRONG_ADD_INPUT = 'Should be "kvs add {KEY} {VALUE}"';
const WRONG_REMOVE_INPUT = 'Should be "kvs remove {KEY}"';
const WRONG_GET_INPUT = 'Should be "kvs get {KEY}"';

const KEY_VALUE_SEP = '::';
const LINE_SEP = os.EOL;

module.exports = {
    GENERAL_INPUT_HINT: GENERAL_INPUT_HINT,
    NO_CONTENT_ERORR: NO_CONTENT_ERORR,
    WRONG_ADD_INPUT: WRONG_ADD_INPUT,
    WRONG_REMOVE_INPUT: WRONG_REMOVE_INPUT,
    WRONG_GET_INPUT: WRONG_GET_INPUT,
    KEY_VALUE_SEP: KEY_VALUE_SEP,
    LINE_SEP: LINE_SEP
}
