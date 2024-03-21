import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import type { Order } from './order';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne('Order', (order: Order) => order.items)
  order: Order;
}
