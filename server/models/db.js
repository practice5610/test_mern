const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('mongodb+srv://asim_ludo:asim_ludo123@cluster0.qqbzp.mongodb.net/test2', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
