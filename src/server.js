import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';

import routes from './routes.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());
app.use('/api', routes);
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('Server iniciado'));
