import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  material: string;

  @Column()
  unit: string;

  @Column()
  thickness: number;

  @Column()
  value: number;
}
