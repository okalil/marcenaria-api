import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './order-item';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  status: string;

  @OneToMany(() => OrderItem, item => item.order)
  items: OrderItem[];
}
