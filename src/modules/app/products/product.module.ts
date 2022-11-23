import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers/product.controller';
import { ProductRepository } from './repositories/typeorm/product.repository';
import { GetProductsWithFilterService } from './domain/services/getProductsWithFilter.service';
import { Product } from './domain/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductRepository, GetProductsWithFilterService],
})
export class ProductsModule {}
