import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from './entities/user';
import { Customer } from './entities/customer';
import { Order } from './entities/order';
import { OrderItem } from './entities/order-item';
import { Product } from './entities/product';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: 'marcenaria',
  synchronize: true,
  logging: false,
  entities: [User, Customer, Order, OrderItem, Product],
  migrations: [],
  subscribers: [],
});
