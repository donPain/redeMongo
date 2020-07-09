const mongoose = require('mongoose');

mongoose.connect('mongoose://localhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;