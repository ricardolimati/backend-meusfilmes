const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ricardolima:ric191li@cluster0-u9nsm.mongodb.net/meusfilmes?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.Promise = global.Promise;
module.exports = mongoose;
