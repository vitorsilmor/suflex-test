import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from '../interfaces/product.interface';

@Entity({ name: 'products' })
export class Product implements IProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  days_to_expiration: number;
}
