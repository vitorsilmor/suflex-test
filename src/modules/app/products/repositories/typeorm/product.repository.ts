import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../domain/entities/product.entity';
import { IProduct } from '../../domain/interfaces/product.interface';
import { GetProductsWithFilterDTO } from '../../dtos/getProductsWithFilter.dto';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async getAll(data?: GetProductsWithFilterDTO): Promise<Array<IProduct>> {
    return await this.repository.find({
      where: data,
      order: {
        name: 'ASC',
      },
    });
  }
}
