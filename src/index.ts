import 'dotenv/config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ZodError } from 'zod';

import { router } from './routes';
import { handleError } from './middleware/error.middleware';

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/marcenaria');

  const app = express();
  app.use(router);
  app.use(handleError);

  app.listen(5000, () => console.log('running...'));
}

main();
