// You'll use this script to add some initial data to your database
// Remember, before performing any operations you need to connect to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server
const Celebrity = require('./models/celebrity');
const mongoose = require('mongoose');
require('dotenv').config();

let feed = [
  {
    name: 'Johny Depp',
    occupation: 'actor',
    catchPhrase: 'Wackadoodoooo'
  },
  {
    name: 'Beret',
    occupation: 'singer',
    catchPhrase: 'Spanish things'
  },
  {
    name: 'Barack Obama',
    occupation: 'politician',
    catchPhrase: 'I have a dream'
  }
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    return Celebrity.insertMany(feed);
  })
  .then(() => mongoose.disconnect())
  .catch(error => {
    console.log('Error', error);
  });
