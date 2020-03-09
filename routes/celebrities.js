const express = require('express');
const celeb = express.Router();
const mongoose = require('mongoose');

const Celebrities = require('../models/celebrity');

// Handle GET request for website root
celeb.get('/', (req, res, next) => {
  Celebrities.find()
    .then(data => {
      res.render('celebrity', { data });
    })
    .catch(error => console.log(error));
});

celeb.get('/create', (req, res, next) => {
  Celebrities.find()
    .then(data => {
      res.render('createCelebritie', { data });
    })
    .catch(error => console.log(error));
});

celeb.post('/', (req, res, next) => {
  const famous = req.body;
  mongoose
    .connect(process.env.MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      Celebrities.create(famous);
    })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(
      Celebrities.find().then(data => {
        console.log(data);
        res.render('celebrity', { data });
      })
    );
});

celeb.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrities.findByIdAndRemove(id)
    .then(res.redirect('/celebrities'))
    .catch(error => console.log(error));
});

celeb.post('/:id/edit', (req, res, next) => {
  console.log('got the id?');
  const id = req.params.id;
  console.log('got the id', id);
  Celebrities.findByIdAndRemove(id)
    .then(res.redirect('/celebrities'))
    .catch(error => console.log(error));
});

module.exports = celeb;
