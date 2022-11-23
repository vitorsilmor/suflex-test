import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ISeedService } from './interfaces/seedService.interface';
import { ProductsSeedService } from './products/productsSeed.service';

@Injectable()
export class SeedService {
  private seeders: Array<ISeedService> = new Array<ISeedService>();

  constructor(private readonly entityManager: EntityManager) {
    this.seeders.push(new ProductsSeedService(this.entityManager));
  }

  async seed(): Promise<void> {
    for await (const seeder of this.seeders) {
      await seeder.run();
    }
  }
}
