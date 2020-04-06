# Simple key-value console app [![Build Status](https://travis-ci.com/haskone/dummy_kvs_node.svg?branch=master)](https://travis-ci.com/haskone/dummy_kvs_node)

## Usage

1. `kvs add {KEY} {VALUE}`
2. `kvs remove {KEY}`
3. `kvs get {KEY}`

Also, use `kvs help` to get the following help message:

```
Use one of the following way:
    - kvs add {KEY} {VALUE}
    - kvs remove {KEY}
    - kvs get {KEY}
```

## Brief description of structure

- `kvs.js`: just getting params and pass it to others
- `config.js`: so far only DB filename, but should contain all configuration params

- `src/`
    - `constants.js`: all constants
    - `utils.js`: common helpers
    - `operations.js`: has a wrapper over Store instance to handle input/callbacks
    - `stores.js`: main logic to work with "DB" is here

## Run tests

`npm test`
