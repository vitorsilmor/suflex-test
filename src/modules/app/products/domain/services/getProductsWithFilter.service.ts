import { Inject, Injectable } from '@nestjs/common';
import { ProductFilterDTO } from '../../dtos/productFilter.dto';
import { IProduct } from '../interfaces/product.interface';
import { ProductRepository } from '../../repositories/typeorm/product.repository';
import { ProductException } from '../../exceptions/product.exceptions';

@Injectable()
export class GetProductsWithFilterService {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(data: ProductFilterDTO): Promise<Array<IProduct>> {
    try {
      let filter = null;

      if (data.daysToExpire) {
        filter = {
          days_to_expiration: data.daysToExpire,
        };
      }

      return await this.productRepository.getAll(filter);
    } catch (error) {
      throw new ProductException(`GetProductError: ${error.message}`);
    }
  }
}
