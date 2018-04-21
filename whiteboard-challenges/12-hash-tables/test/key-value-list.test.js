const KeyValueList = require('../key-value-list');

describe('KeyValueList', () => {
  it('should store and get key-value pairs', () => {
    let kv = new KeyValueList();
    kv.put('phone', '555-1111-222');
    kv.put('email', 'me@aol.com');
    kv.put('colors', ['green', 'red', 'blue']);

    expect(kv.get('phone')).toEqual('555-1111-222');
    expect(kv.get('email')).toEqual('me@aol.com');
    expect(kv.get('colors')).toEqual(['green', 'red', 'blue']);
  });
});