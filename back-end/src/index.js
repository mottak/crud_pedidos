const express = require('express');
const userRoutes = require('./routes/usersRoute');
const errorMiddleware = require('./middlewares/error');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
