import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from './routes';
import { handleError } from './middleware/error.middleware';

async function main() {
  await mongoose.connect(process.env.MONGODB_URL!);

  const app = express();
  app.use(cors({ origin: process.env.CLIENT_URL }));
  app.use(express.json());
  app.use(router);
  app.use(handleError);

  app.listen(5000, () => console.log('running...'));
}

main();
