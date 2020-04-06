var fs = require('fs');
var readline = require('readline');

var constants = require('./constants.js');
var Store = require('./store.js');

jest.mock('fs');
jest.mock('readline');

test('Add to store', () => {
  const dbFilename = 'fake.db';
  let store = new Store.Store(dbFilename);

  const key = 'key';
  const value = 'value';

  store.add(key, value, null);
  const dbValue = `${key}${constants.KEY_VALUE_SEP}${value}${constants.LINE_SEP}`;

  expect(fs.appendFile).toBeCalledWith(dbFilename, dbValue, 'utf8', expect.any(Function));
});

test('Remove from store', () => {
  const dbFilename = 'fake.db';
  let store = new Store.Store(dbFilename);

  const fileStream = 'fileStream';
  fs.createReadStream.mockResolvedValue(fileStream);

  let mockReadlineOnClose = jest.fn().mockReturnValue(true);
  let mockReadlineOnLine = jest.fn().mockReturnValue({ on: mockReadlineOnClose });
  readline.createInterface.mockReturnValue({ on: mockReadlineOnLine });

  const key = 'key';
  store.remove(key, null);

  expect(fs.createReadStream).toBeCalledWith(dbFilename);
  expect(mockReadlineOnLine).toBeCalledWith('line', expect.any(Function));
  expect(mockReadlineOnClose).toBeCalledWith('close', expect.any(Function));
});

test('Get from store', () => {
  const dbFilename = 'fake.db';
  let store = new Store.Store(dbFilename);

  const fileStream = 'fileStream';
  fs.createReadStream.mockResolvedValue(fileStream);

  let mockReadlineOn = jest.fn().mockReturnValue(true);
  readline.createInterface.mockReturnValue({ on: mockReadlineOn });

  const key = 'key';
  store.get(key, null);

  expect(fs.createReadStream).toBeCalledWith(dbFilename);
  expect(mockReadlineOn).toBeCalledWith('line', expect.any(Function));
});
