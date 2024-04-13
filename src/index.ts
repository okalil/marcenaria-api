import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes';

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/marcenaria');

  const app = express();
  app.use(router);
  app.use((error, req, res, next) => {
    res.status(error.status ?? 500).json({ message: error.message });
  });

  app.listen(5000, () => console.log('running...'));
}

main();
