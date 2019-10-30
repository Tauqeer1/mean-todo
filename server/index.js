import express from 'express';

// Running server port
const PORT = process.env.PORT || 8080;

// initiate express
const app = express();

// start a server on port 8000
try {
  app.listen(PORT, err => {
    if (err) {
      console.log('start server error:', err);
      process.exit(-1);
    } else {
      console.log(`App listening to port: ${PORT}`);
    }
  });
} catch (err) {
  console.log('start server err:', err);
}
