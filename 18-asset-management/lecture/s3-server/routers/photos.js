const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const Polaroid = require('../models/polaroid');

const router = new express.Router();

router.get('/', (req, res) => {
  Polaroid.find({})
  .then((polas) => {
    res.send(polas);
  });
});

router.post('/upload', upload.single('polaroid'), (req, res) => {
  console.log('GOT', req.file);

  let params = {
    // access control list
    ACL: 'public-read',
    Bucket: process.env.AWS_BUCKET,
    Key: req.file.originalname,
    Body: fs.createReadStream(req.file.path)
  };

  console.log('uploading...');
  s3.upload(params, (err, s3Data) => {
    console.log('uploaded', s3Data);
    let pola = new Polaroid({url: s3Data.Location});
    pola.save()
    .then((pola) => {
      console.log('saved', pola);
      res.send(pola);
    });
  });
});

module.exports = router;