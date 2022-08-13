import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import errorMiddleware from './middlewares/error';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log(`App listening on port ${port}`);
});
