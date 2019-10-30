import express from 'express';
import path from 'path';
import middlewareConfig from './configs/middleware';
import dbConnect from './configs/db';
// import userRoutes for api routes
import { userRoutes, todoRoutes } from './modules';

// Running server port
const PORT = process.env.PORT || 8080;

// db connection
dbConnect();

// initiate express
const app = express();

// middleware
middlewareConfig(app);

// create link to Angular build directory
let distDir = path.resolve(__dirname, '../dist/mean-todo');
app.use(express.static(distDir));

// Api routes for all api
app.use('/api', [userRoutes, todoRoutes]);

// render index.html page from angular
app.get('/*', (req, res) => {
  res.sendFile(distDir + '/index.html');
});

// start a server on port 8000
try {
  app.listen(PORT, err => {
    if (err) {
      console.log('start server error:', err);
      process.exit(1);
    } else {
      console.log(`App listening to port: ${PORT}`);
    }
  });
} catch (err) {
  console.log('start server err:', err);
}
