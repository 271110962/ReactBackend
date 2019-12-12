import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import contactsRouter from './api/books';
import './db';

dotenv.config();

export const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use('/api/books', contactsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});