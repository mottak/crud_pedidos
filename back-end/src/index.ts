import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
