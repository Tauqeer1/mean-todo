import mongoose from 'mongoose';

import credentials from './credentials';

export default () => {
  // establish mongodb connection
  mongoose.connect(credentials.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  // On successfull connection or On unsuccssfull connection it throws error
  mongoose.connection
    .once('open', function() {
      console.log('MongoDB running!');
    })
    .on('error', function(DBError) {
      console.error('MongoDB error', { DBError });
      process.exit(1);
    });
};
