import { Product } from 'src/modules/app/products/domain/entities/product.entity';
import { EntityManager } from 'typeorm';
import { ISeedService } from '../interfaces/seedService.interface';
import { products } from './product.seed';

export class ProductsSeedService implements ISeedService {
  constructor(private readonly entityManager: EntityManager) {}

  async run(): Promise<void> {
    for await (const product of products) {
      const exists = await this.entityManager.findOne(Product, {
        where: {
          name: product.name,
        },
      });

      if (!exists) {
        await this.entityManager.save(Product, product);
      }
    }
  }
}
