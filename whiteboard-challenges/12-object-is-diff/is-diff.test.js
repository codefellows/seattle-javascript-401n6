const isDiff = require('./is-diff');

describe("isDiff", () => {
  it("should be false for two empty objects", () => {
     expect(isDiff({}, {})).toBe(false);
  });

  it("true for one key, no key", () => {
     expect(isDiff({foo: 1}, {})).toBe(true);
  });

  it("true for one key, no key (twisted)", () => {
     expect(isDiff({}, {foo: 1})).toBe(true);
  });

  it('false one key both same', () => {
    expect(isDiff({foo: 'bar'}, {foo: 'bar'})).toBe(false);
  });

  it('true one key different', () => {
    expect(isDiff({foo: 'bar'}, {foo: 'qqq'})).toBe(true);
  });
});
