require('dotenv').config();

describe('.env file', () => {
  it('should be able to access each property', () => {
    expect(process.env.PORT).toEqual('3223');
    expect(process.env.SECRET).toEqual('mooncolonynow');
    expect(process.env.MONGODB_URI).toEqual('mongodb://localhost/17-bearer-auth');
  });
});
