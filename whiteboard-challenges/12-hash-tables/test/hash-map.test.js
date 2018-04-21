const HashMap = require('../hash-map');

describe('KeyValueList', () => {
  it('should store and get key-value pairs', () => {
    let kv = new HashMap();
    kv.put('bat', '1');
    kv.put('cas', '2');
    kv.put('kjhvhjkhghljh', '3');
    kv.put('sgidnflksdnfdklsj', '4');
    kv.put('skjdlkfsdklfsdlkfsl', '5');
    kv.put('sdlkfjdslkfjdslkj', '6');
    kv.put('klsjfldksfisjoil', '7');
    kv.put('kdnfsklfnsdoi', '8');
    kv.put('98123jfodivs', '9');
    console.log(kv);
  });
});