'use strict';

const { send } = require('micro');
const { upload, move } = require('micro-upload');
const path = require('path');
const isImage = require('is-image');
const uuid = require('uuid');

module.exports = upload(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.method.toUpperCase() !== 'POST') {
    return send(res, 405, { error: 'Invalid Method, please use POST' });
  }

  if(!req.files) {
    return send(res, 400, { error: 'No file upload' });
  }

  const file = req.files.file;

  if(!isImage(file.name)) {
    return send(res, 400, 'Please upload image');
  }

  

  
  const ext = path.extname(file.name);
  const name = uuid.v4() + ext;

  const finalPath = path.join(__dirname, 'uploads', name);

  await move(file, finalPath)

  send(res, 200, { name, src: finalPath });
});