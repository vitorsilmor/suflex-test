import { Module } from '@nestjs/common';
import { ConfigurationModules } from './configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './app/products/product.module';
import { SeedService } from './configs/database/typeorm/seeds/seed.service';

@Module({
  imports: [...ConfigurationModules, ProductsModule],
  controllers: [AppController],
  providers: [AppService, SeedService],
})
export class AppModule {
  constructor(private readonly seedingService: SeedService) {}

  async onApplicationBootstrap(): Promise<void> {
    await this.seedingService.seed();
  }
}
