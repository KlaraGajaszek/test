import { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export const applyMiddleware = (app: Express) => {
  app.use(cors());
  app.use(bodyParser.json());
};
