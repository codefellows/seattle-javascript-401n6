require('dotenv').config();

const request = require('superagent');

describe('S3 Uploads', () => {
  it('should be able to upload images', (done) => {
    let imageLocation = './data/photo1.png';
    let uploadUrl = 'http://localhost:3000/photos/upload';

    request.post(uploadUrl)
    .attach('picture', imageLocation)
    .end((err, res) => {
      let amazonUrl = process.env.AWS_BUCKET + '.s3.amazonaws.com';
      let isAmazonUrl = res.body.url.includes(amazonUrl);
      expect(isAmazonUrl).toBe(true);

      done();
    });
  });
});
