import 'dotenv/config'
import express from 'express';

import { dataSource } from './model/data-source';
import { router } from './routes';

async function main() {
  await dataSource.initialize();

  const app = express();
  app.use(router);

  app.listen(5000, () => console.log('running...'))
}

main();
