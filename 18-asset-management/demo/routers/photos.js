const fs = require('fs');
const path = require('path');
const express = require('express');
const router = new express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const Photo = require('../models/photo');

router.get('/', (req, res) => {
  Photo.find()
  .then(photos => {
    res.send(photos);
  });
});

router.post('/upload', upload.single('picture'), function (req, res, next) {
  // req.file is the `picture` file
  // req.body will hold the text fields, if there were any
  console.log('filename:', req.file);

  let ext = path.extname(req.file.originalname);
  console.log('ext:', ext);
  let params = {
    ACL: 'public-read',
    Bucket: process.env.AWS_BUCKET,
    Key: `${req.file.filename}${ext}`,
    Body: fs.createReadStream(req.file.path)
  }

  s3.upload(params, (err, s3Data) => {
    console.log('s3 response', s3Data);

    new Photo({
      url: s3Data.Location
    })
    .save()
    .then(photo => {
      res.send(photo);
    });
  });
});

module.exports = router;

