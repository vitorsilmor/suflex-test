import { Controller, Get, Req } from '@nestjs/common';
import { GetProductsWithFilterService } from '../domain/services/getProductsWithFilter.service';
import { Request } from 'express';

@Controller('products')
export class ProductController {
  constructor(private readonly appService: GetProductsWithFilterService) {}

  @Get()
  async index(@Req() request: Request): Promise<object> {
    return await this.appService.handle(request.query);
  }
}
