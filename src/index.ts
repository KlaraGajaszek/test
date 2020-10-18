import express from 'express';
import { initializeControllers } from './controllers';
import { applyMiddleware } from './middleware';
import { runApp } from './run';

const app = express();

applyMiddleware(app);
initializeControllers(app);
runApp(app);
