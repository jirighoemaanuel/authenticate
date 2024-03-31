import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
import loginRouter from './routes/LoginRoute.js';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', loginRouter);

// server
const server = () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

server();
