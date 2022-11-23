import { Module } from '@nestjs/common';
import { ConfigurationModules } from './configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './app/products/product.module';

@Module({
  imports: [...ConfigurationModules, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
