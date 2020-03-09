const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: ['actor', 'singer', 'comedian', 'unknown'],
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
