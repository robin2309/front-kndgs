import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import { PORT, AUTH_ENDPOINT } from 'Configs';
import logger from 'Utils/logger.js';
import { middlewareSsr } from './middleware/ssr';
import { session, sessionLogin } from './middleware/session';
import loginLayout from 'Layouts/login';

const app = express();

app
  .use(cookieParser())
  .use('/build', express.static('build'))
  .use('/static', express.static('static'))
  .get('/ping', (req, res) => {
    res.send('pong');
  })
  .get('/favicon.ico', (req, res) => {
    res.send('');
  })
  .use(
    session,
    async(req, res) => {
      res.send(await middlewareSsr(req));
    }
  );

app.listen(PORT || 3333, () =>
  logger.info(`App listening on port ${PORT || 3333}`)
);
