import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nationality: string;

  @Column()
  maritalStatus: string;

  @Column()
  profession: string;

  @Column()
  cpf: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
