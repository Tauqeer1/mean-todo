import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

// Exporting all middleware
export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cors());
  app.use(function(err, req, res, next) {
    if (err.type === 'entity.parse.failed') {
      res
        .status(500)
        .json(
          'Syntax error, Parsing failed: Check request params or request body.'
        );
    } else {
      res.status(500).json('Something went wrong');
    }
  });
};
